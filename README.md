# Advanced Web Applications — Client-Side Browser Apps

This repository contains the materials for an accelerated **18-day summer course in advanced web application development**. The course focuses on applications that run in the browser: first with HTML, CSS, and JavaScript, and then with React and Vite.

The course culminates in **Homework 2**, a substantial thick-client browser application that brings together interface design, application state, modular JavaScript, asynchronous behavior, and modern component-based development.

> **Current course position:** Days 1–9 are complete. Day 10 begins the transition from JavaScript foundations to browser application architecture and React tooling.

---

## Course Focus

This version of the course is intentionally centered on **client-side browser applications**. It does not attempt to cover a full backend stack during the shortened summer term.

Students will learn to:

1. Build semantic, accessible interfaces with HTML.
2. Create responsive layouts and visual systems with CSS.
3. Write browser-based applications with modern JavaScript.
4. Organize application logic with data structures, functions, objects, and classes.
5. Use the DOM and browser events to create interactive interfaces.
6. Structure code with ES modules and asynchronous JavaScript.
7. Build component-based applications with React and Vite.
8. Manage application state with React hooks.
9. Design, deploy, and demonstrate a substantial thick-client browser application.

---

## Course Schedule

| Day | Topic | Course status |
|---:|---|---|
| 1 | Introductions and course overview | Complete |
| 2 | Core configuration, setup, and installation | Complete |
| 3 | HTML foundations and Lab 1 | Complete |
| 4 | CSS foundations and Lab 2 | Complete |
| 5 | The browser as a development platform and JavaScript Basics I | Complete |
| 6 | JavaScript Basics II | Complete |
| 7 | JavaScript lab work: Lab 4 | Complete |
| 8 | JavaScript data structures | Complete |
| 9 | JavaScript classes and lab work: Lab 5 | Complete |
| 10 | Application tooling setup, configuration, and course checkpoint | **Next** |
| 11 | The DOM and browser events | Upcoming |
| 12 | ES modules and asynchronous JavaScript | Upcoming |
| 13 | JavaScript application lab: Lab 6 | Upcoming |
| 14 | React basics and Vite | Upcoming |
| 15 | React components and composition | Upcoming |
| 16 | React state and hooks | Upcoming |
| 17 | Advanced React application development and capstone completion | Upcoming |
| 18 | Capstone demonstration day | Upcoming |

The schedule may be adjusted to match class progress. Assignment requirements and submission records are maintained through the course roadmap and the corresponding GitHub Issues in each student repository.

---

## Assignments

The course is organized around a sequence of hands-on labs followed by a comprehensive capstone project.

Some labs are **required** and contribute directly to the course progression. Other labs are **optional enrichment activities** that provide additional practice but are not required for course completion.

Additional React labs will be assigned during the React portion of the course. Their numbers, titles, requirements, roadmap entries, and due dates have not yet been published.

### Required Labs

| Roadmap key | Assignment | Primary focus |
|---|---|---|
| `lab-01` | **Lab 01 — HTML-first Interactive Game (Minimal JavaScript)** | Semantic HTML, page structure, forms, links, and introductory browser interaction |
| `lab-02` | **Lab 02 — CSS Crash Course** | CSS selectors, layout, Flexbox, responsive design, and visual styling |
| `lab-04` | **Lab 04 — JavaScript Basics: Hi–Lo Game (MVP → MVC)** | JavaScript fundamentals, DOM updates, events, and application organization |
| `lab-05` | **Lab 05 — JavaScript OOP + Phaser: Dodger Game** | Object-oriented JavaScript, classes, scenes, and browser game architecture |
| `lab-06` | **Lab 06 — REST Client: Quiz Game + Leaderboard (Modules + Fetch)** | ES modules, asynchronous programming, Fetch, REST clients, and client-side state |

### Optional Labs

Optional labs are available for additional practice and exploration but are **not required** for course completion.

| Roadmap key | Assignment | Primary focus |
|---|---|---|
| `lab-03` | **Lab 03 — Bootstrap CSS Framework** | Bootstrap’s responsive grid, components, utility classes, and browser-based interface styling |

---

## Capstone Project

The capstone is the culminating project for the course.

Students will design, build, deploy, and demonstrate a substantial **thick-client browser application** whose primary interface, computation, rendering, and application state execute in the browser.

The completed application should demonstrate the major ideas from the course, including:

- semantic HTML and responsive CSS;
- organized JavaScript or React application architecture;
- meaningful application state and user interaction;
- reusable modules, components, and classes;
- asynchronous programming with REST services;
- browser persistence using local storage or IndexedDB where appropriate;
- responsive layouts with clear loading, empty, success, and error states;
- documented build and deployment instructions; and
- a deployed application prepared for the final course demonstration.


---

## Assignment Tracking and Submission

The canonical assignment definitions live in [`.github/roadmap.json`](.github/roadmap.json). Student repositories fetch that file and use GitHub Actions to create or update assignment Issues.

### Synchronize Before Pushing

GitHub Actions may update the remote repository between local work sessions. To avoid a rejected push or divergent branches, students should commit their work and then synchronize with `origin/main` before pushing:

```bash
git status
git add .
git commit -m "Complete Lab XX"
git pull --rebase origin main
git push origin main
```

If there is nothing new to commit, begin with `git pull --rebase origin main`, then push.

If Git reports a conflict during the rebase:

1. Run `git status` to identify the conflicting files.
2. Edit each file and resolve the marked conflict sections.
3. Stage each resolved file with `git add <filename>`.
4. Continue with `git rebase --continue`.
5. Repeat as needed, then run `git push origin main`.

Use `git rebase --abort` to cancel the rebase and return to the state before it began. Do **not** use `git push --force` on a submission repository unless the instructor specifically directs you to do so.

As an optional one-time setting, students can make rebase the default behavior for `git pull` in this repository:

```bash
git config pull.rebase true
```

### Labs

Assigned lab work is stored directly in the student portfolio repository:

```text
labs/
└── lab-XX/
    ├── index.html
    ├── supporting source and assets
    └── README.md
```

Students use the matching GitHub Issue to review the checklist, report completion, and provide any required live link or reflection. Planned React labs require no submission until their individual roadmap entries are published.

### Capstone

The capstone is developed in its own project repository. The student portfolio contains a pointer file with the project repository, deployed application, documentation, and demonstration information:

```text
projects/
└── README.md
```

The `capstone` Issue acts as the capstone submission record and links to the implementation repository, deployed application, and supporting evidence.

---

## Core Technologies

- HTML5
- CSS3
- Browser developer tools
- Modern JavaScript
- DOM and browser events
- ES modules
- Promises, `async` / `await`, and Fetch
- React
- Vite
- Git, GitHub, GitHub Issues, and GitHub Actions

---

## Reference Documentation

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript Guide on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)