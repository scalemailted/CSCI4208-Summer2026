# Summer 2026 course automation source

This directory is the instructor-controlled source of truth for assignment Issues created in student submission repositories.

## Files

- `course-manifest.json` identifies the course repository, branch, canonical data files, and student-facing links.
- `labels.json` defines every label the roadmap may use. Metadata such as `group` and `preserveOnIssueSync` is consumed by the automation but is not sent to GitHub as label data.
- `roadmap.json` defines assignment Issues. Only entries with `"published": true` are created or updated in student repositories.
- `scripts/validate-course-config.cjs` validates all three JSON files and confirms that referenced instruction files exist.
- `workflows/validate-course-config.yml` runs that validation whenever the automation data or assignment instructions change.

## Publishing a new assignment

1. Add its stable key label to `labels.json`, such as `lab-07`; the capstone uses the standalone key `capstone`.
2. Add the complete roadmap entry to `roadmap.json` with `"published": false`.
3. Push the change and confirm that **Validate summer course automation data** passes.
4. Change only `published` to `true` when students should receive the Issue.
5. Push to `main`.

Student repositories check this source on every push, on an hourly schedule, and when their owner manually runs the roadmap workflow. No file needs to be copied into each student repository when the roadmap changes.

## Roadmap fields

A published item uses this shape:

```json
{
  "key": "lab-07",
  "title": "Lab 07 — Title",
  "published": true,
  "status": "assigned",
  "labels": ["task", "lab", "lab-07", "JavaScript"],
  "milestone": "React Application Development",
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

- `key` is the permanent identifier. Do not rename a key after it has been published.
- `published` must be explicitly `true` or `false`.
- `due` is optional student-facing text displayed in the Issue.
- `milestoneDue` is optional and must be `YYYY-MM-DD` or an ISO-8601 date/time. It controls the GitHub milestone date.
- `instructions` is a path in this course repository.
- `submissionPath` is the expected location in the student submission repository.
- `acceptance` becomes a GitHub task list.

## What later edits do

For an already-published key, later roadmap edits update the matching Issue title, instructor-managed body section, milestone, and course-managed labels. The automation preserves:

- checklist items whose text has not changed;
- everything between the student-submission markers;
- status labels marked with `preserveOnIssueSync`;
- labels students add that are not part of the canonical course set; and
- the Issue's closed state by default.

Changing an item to `published: false` prevents initial publication, but it intentionally does not delete an Issue that was previously published.

## Labels

Every roadmap label must exist in `labels.json`. Labels in the `status` group set `preserveOnIssueSync: true`, ensuring that course-data refreshes do not erase student or instructor progress labels.

The label synchronizer creates and updates canonical labels but does not delete extra labels from a student repository.
