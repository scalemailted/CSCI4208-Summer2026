'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const KEY_PATTERN = /^(?:lab-\d+|capstone)$/i;
const errors = [];
const warnings = [];

function error(message) {
  errors.push(message);
}

function warning(message) {
  warnings.push(message);
}

function nonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function readJson(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  try {
    return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
  } catch (caught) {
    error(`${relativePath}: ${caught.message}`);
    return null;
  }
}

function isSafeRelativePath(value) {
  if (!nonEmptyString(value) || path.isAbsolute(value)) return false;
  const normalized = path.posix.normalize(value.replace(/\\/g, '/'));
  return normalized !== '..' && !normalized.startsWith('../');
}

function validateRepositoryPath(value, location, { mustExist = false } = {}) {
  if (!isSafeRelativePath(value)) {
    error(`${location}: must be a non-empty path inside the course repository.`);
    return;
  }
  if (mustExist && !fs.existsSync(path.join(ROOT, value))) {
    error(`${location}: file does not exist: ${value}`);
  }
}

function validateHttpsUrl(value, location, required = false) {
  if (!nonEmptyString(value)) {
    if (required) error(`${location}: is required.`);
    return;
  }
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'https:') error(`${location}: must use https://.`);
  } catch {
    error(`${location}: must be a valid URL.`);
  }
}

function validateMilestoneDue(value, location) {
  if (value === undefined || value === null || value === '') return;
  if (!nonEmptyString(value)) {
    error(`${location}: must be a YYYY-MM-DD or ISO-8601 string.`);
    return;
  }
  const text = value.trim();
  const candidate = /^\d{4}-\d{2}-\d{2}$/.test(text)
    ? `${text}T23:59:59Z`
    : text;
  if (Number.isNaN(Date.parse(candidate))) {
    error(`${location}: must be a valid YYYY-MM-DD or ISO-8601 date/time.`);
  }
}

function validateManifest(manifest, manifestPath) {
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    error(`${manifestPath}: root value must be an object.`);
    return;
  }
  if (manifest.schemaVersion !== 1) {
    error(`${manifestPath}: schemaVersion must be 1.`);
  }

  for (const field of ['code', 'title', 'term', 'timezone']) {
    if (!nonEmptyString(manifest.course?.[field])) {
      error(`${manifestPath}: course.${field} is required.`);
    }
  }

  for (const field of ['owner', 'repository', 'ref']) {
    if (!nonEmptyString(manifest.source?.[field])) {
      error(`${manifestPath}: source.${field} is required.`);
    }
  }

  for (const field of ['roadmap', 'labels']) {
    const value = manifest.files?.[field];
    if (!nonEmptyString(value)) {
      error(`${manifestPath}: files.${field} is required.`);
    } else {
      validateRepositoryPath(value, `${manifestPath}: files.${field}`, { mustExist: true });
    }
  }

  validateHttpsUrl(manifest.links?.courseRepository, `${manifestPath}: links.courseRepository`, true);
  validateHttpsUrl(manifest.links?.studentGuide, `${manifestPath}: links.studentGuide`, true);
}

function validateLabels(labels, labelsPath) {
  const definitions = new Map();
  if (!Array.isArray(labels)) {
    error(`${labelsPath}: root value must be an array.`);
    return definitions;
  }

  labels.forEach((label, index) => {
    const location = `${labelsPath}[${index}]`;
    if (!label || typeof label !== 'object' || Array.isArray(label)) {
      error(`${location}: must be an object.`);
      return;
    }

    const name = nonEmptyString(label.name) ? label.name.trim() : '';
    const color = String(label.color || '').replace(/^#/, '').toLowerCase();
    const description = label.description == null ? '' : label.description;

    if (!name) error(`${location}: name is required.`);
    if (name.length > 50) error(`${location}: name exceeds GitHub's 50-character limit.`);
    if (!/^[0-9a-f]{6}$/.test(color)) {
      error(`${location}: color must be exactly six hexadecimal characters.`);
    }
    if (typeof description !== 'string') {
      error(`${location}: description must be a string.`);
    } else if (description.length > 100) {
      error(`${location}: description exceeds GitHub's 100-character limit.`);
    }
    if (label.group !== undefined && !nonEmptyString(label.group)) {
      error(`${location}: group must be a non-empty string when supplied.`);
    }
    if (label.preserveOnIssueSync !== undefined && typeof label.preserveOnIssueSync !== 'boolean') {
      error(`${location}: preserveOnIssueSync must be true or false.`);
    }
    if (String(label.group || '').toLowerCase() === 'status' && label.preserveOnIssueSync !== true) {
      error(`${location}: status labels must set preserveOnIssueSync to true.`);
    }

    if (name) {
      const normalized = name.toLowerCase();
      if (definitions.has(normalized)) {
        error(`${location}: duplicate label name "${name}" (case-insensitive).`);
      } else {
        definitions.set(normalized, { ...label, name, color });
      }
    }
  });

  return definitions;
}

function validateRoadmap(roadmap, roadmapPath, labels) {
  if (!Array.isArray(roadmap)) {
    error(`${roadmapPath}: root value must be an array.`);
    return { publishedCount: 0 };
  }

  const keys = new Map();
  const titles = new Map();
  let publishedCount = 0;

  roadmap.forEach((item, index) => {
    const location = `${roadmapPath}[${index}]`;
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      error(`${location}: must be an object.`);
      return;
    }

    const key = nonEmptyString(item.key) ? item.key.trim() : '';
    const title = nonEmptyString(item.title) ? item.title.trim() : '';
    const normalizedKey = key.toLowerCase();

    if (!key) error(`${location}: key is required.`);
    if (!title) error(`${location}: title is required.`);
    if (!nonEmptyString(item.status)) error(`${location}: status is required.`);
    if (typeof item.published !== 'boolean') {
      error(`${location}: published must be explicitly true or false.`);
    }

    if (key) {
      if (keys.has(normalizedKey)) {
        error(`${location}: duplicate key "${key}"; first used at index ${keys.get(normalizedKey)}.`);
      } else {
        keys.set(normalizedKey, index);
      }
    }
    if (title) {
      const normalizedTitle = title.toLowerCase();
      if (titles.has(normalizedTitle)) {
        error(`${location}: duplicate title "${title}"; first used at index ${titles.get(normalizedTitle)}.`);
      } else {
        titles.set(normalizedTitle, index);
      }
    }

    const itemLabels = new Set();
    if (!Array.isArray(item.labels)) {
      error(`${location}: labels must be an array.`);
    } else {
      for (const rawLabel of item.labels) {
        if (!nonEmptyString(rawLabel)) {
          error(`${location}: labels may not contain empty values.`);
          continue;
        }
        const displayName = rawLabel.trim();
        const normalized = displayName.toLowerCase();
        if (itemLabels.has(normalized)) {
          error(`${location}: duplicate label "${displayName}" on the same item.`);
        }
        itemLabels.add(normalized);
        if (!labels.has(normalized)) {
          error(`${location}: label "${displayName}" is missing from the canonical labels file.`);
        }
      }
    }

    if (item.due !== undefined && item.due !== null && !nonEmptyString(item.due)) {
      error(`${location}: due must be a non-empty display string when supplied.`);
    }
    validateMilestoneDue(item.milestoneDue, `${location}: milestoneDue`);

    if (item.instructions !== undefined) {
      validateRepositoryPath(item.instructions, `${location}: instructions`, { mustExist: true });
    }
    if (item.submissionPath !== undefined) {
      validateRepositoryPath(item.submissionPath, `${location}: submissionPath`);
    }

    const stableKey = KEY_PATTERN.test(key);
    if (stableKey) {
      if (!itemLabels.has(normalizedKey)) {
        error(`${location}: stable item key "${key}" must also appear in labels.`);
      }
      if (!itemLabels.has('task')) {
        error(`${location}: stable item key "${key}" must include the "task" label.`);
      }
      if (normalizedKey.startsWith('lab-') && !itemLabels.has('lab')) {
        error(`${location}: lab items must include the "lab" label.`);
      }
      if (normalizedKey === 'capstone' && !itemLabels.has('capstone')) {
        error(`${location}: capstone items must include the "capstone" label.`);
      }
    }

    if (item.published !== true) return;
    publishedCount += 1;

    if (!stableKey) {
      error(`${location}: published key "${key}" must match lab-## or capstone.`);
    }
    for (const field of ['milestone', 'task', 'instructions', 'submissionPath']) {
      if (!nonEmptyString(item[field])) {
        error(`${location}: ${field} is required for published items.`);
      }
    }
    if (!Array.isArray(item.acceptance) || item.acceptance.length === 0) {
      error(`${location}: acceptance must contain at least one checklist item.`);
    } else {
      item.acceptance.forEach((entry, acceptanceIndex) => {
        if (!nonEmptyString(entry)) {
          error(`${location}.acceptance[${acceptanceIndex}]: checklist text is required.`);
        }
      });
    }
  });

  return { publishedCount };
}

function main() {
  const manifestPath = '.github/course-manifest.json';
  const manifest = readJson(manifestPath);
  if (!manifest) {
    for (const message of errors) console.error(`ERROR: ${message}`);
    process.exitCode = 1;
    return;
  }

  validateManifest(manifest, manifestPath);
  const roadmapPath = manifest.files?.roadmap || '.github/roadmap.json';
  const labelsPath = manifest.files?.labels || '.github/labels.json';
  const labelsDocument = readJson(labelsPath);
  const roadmapDocument = readJson(roadmapPath);
  const labels = validateLabels(labelsDocument, labelsPath);
  if (!labels.has('retired')) {
    error(`${labelsPath}: must define the retired label used when an Issue leaves the active roadmap.`);
  }
  const { publishedCount } = validateRoadmap(roadmapDocument, roadmapPath, labels);

  for (const message of warnings) console.warn(`WARNING: ${message}`);
  if (errors.length > 0) {
    for (const message of errors) console.error(`ERROR: ${message}`);
    console.error(`\nCourse automation validation failed with ${errors.length} error(s).`);
    process.exitCode = 1;
    return;
  }

  console.log(
    `Course automation data is valid: ${publishedCount} published roadmap item(s), ${labels.size} canonical label(s).`
  );
}

main();
