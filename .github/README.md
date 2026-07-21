# Summer 2026 course automation source

This directory is the instructor-controlled source of truth for assignment Issues created in Summer 2026 student submission repositories.

## Current active keys

The current roadmap publishes exactly these six Issues:

```text
lab-01
lab-02
lab-04
lab-05
lab-06
capstone
```

The capstone uses the standalone key `capstone`, the Issue label `capstone`, and the submission record `capstone/README.md`.

## Files

- `course-manifest.json` identifies the course repository, branch, canonical data files, and student-facing links.
- `labels.json` defines the labels the Summer 2026 automation manages.
- `roadmap.json` defines assignment Issues. Only entries with `"published": true` are active.
- `scripts/validate-course-config.cjs` validates the JSON and confirms that referenced instruction files exist.
- `workflows/validate-course-config.yml` runs validation when the automation source or assignment instructions change.

## Publishing or retiring an assignment

1. Add the stable key label to `labels.json`.
2. Add the complete roadmap entry with `"published": false`.
3. Push and confirm that **Validate summer course automation data** passes.
4. Change `published` to `true` and push when students should receive the Issue.
5. Change `published` back to `false`, or remove the roadmap entry, when the Issue should no longer be active.

Student repositories check this source on every push, once each hour, and through a manual workflow run. Their synchronizer creates or updates every published Issue, migrates the old `project-02` capstone Issue when encountered, and closes stale or duplicate course-managed Issues with the `retired` label.

## Roadmap fields

A published lab uses this shape:

```json
{
  "key": "lab-07",
  "title": "Lab 07 — Title",
  "published": true,
  "status": "assigned",
  "labels": ["task", "lab", "lab-07", "JavaScript"],
  "milestone": "Application Development",
  "due": "Day 16 before class",
  "milestoneDue": "2026-08-06",
  "instructions": "02-labs/Lab07.pdf",
  "submissionPath": "labs/lab-07/",
  "task": "A concise assignment summary.",
  "acceptance": [
    "First verifiable requirement.",
    "Second verifiable requirement."
  ]
}
```

- `key` is the permanent identifier after publication.
- `published` must be explicitly `true` or `false`.
- `due` is optional student-facing text.
- `milestoneDue` is optional and must be `YYYY-MM-DD` or an ISO-8601 date/time.
- `instructions` is a path in the course repository.
- `submissionPath` is the expected location in the student submission repository.
- `acceptance` becomes a GitHub task list.

## What later edits preserve

For an existing active key, roadmap edits update the title, instructor-managed body, milestone, and course-managed labels while preserving:

- unchanged checked checklist entries;
- everything inside the student-submission markers;
- progress labels marked with `preserveOnIssueSync`;
- unrelated student-created labels; and
- intentionally closed completed or approved Issues.
