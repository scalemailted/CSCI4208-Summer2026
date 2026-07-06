# CSCI 4208 Summer – Modern Full-Stack Web Apps with React

This repository contains the course materials for **CSCI 4208: Modern Full-Stack Web Apps with React**, a summer intensive version of Developing Advanced Web Applications.

The course is designed for **working professionals with little or no prior web development experience**. Students begin with browser-native HTML, CSS, JavaScript, DOM APIs, and `fetch`, then rebuild those ideas in React, and finally move application logic into Node.js and Express.

By the end of the course, students should be able to independently **build, understand, debug, and deploy a small full-stack React application**.

---

## 📦 Repository Organization

This repository is organized into:

- **Lectures** – concept slides, architectural overviews, and code walkthroughs
- **Labs** – guided step-by-step exercises completed during class and homework
- **Examples** – small reference snippets and demos
- **React Remakes** – React versions of earlier browser-native labs
- **Week 3 MUD Project** – Node, Express, sessions, auth, and React integration
- **Capstone** – final full-stack project and presentation materials

Suggested structure:

```text
summer-4208-fullstack-react/
  lectures/
    opening-day/
    web-app-overview/
    html-primer/
    lab-walkthroughs/

  week-01-browser/
    lab-01-html-interactive-story/
    lab-02-css-story-styling/
    lab-04-js-dom-hilo/
    lab-06-rest-quiz/

  week-02-react-remakes/
    react-story-shell/
    react-tailwind-ui-components/
    react-hilo-game/
    react-forms-lists/
    react-rest-quiz/

  week-03-node-express-mud/
    lab-11-node-cli-text-adventure/
    lab-12-express-game-api/
    lab-13-session-backed-mud/
    lab-14-shared-mud-gameplay/
    lab-15-react-mud-client/

  week-04-auth-deploy/
    lab-16-authenticated-protected-mud/
    hack-day-mongodb-teaser/
    final-presentations/

  examples/
  capstone/
  archive-optional/
```

---

## 📘 Course Overview

This course teaches modern web application development through a **paired-lab model**.

During **Week 1**, students complete selected browser-native labs from the original CSCI 4208 client-side sequence. These labs teach what the browser loads, renders, remembers, forgets, and requests.

During **Week 2**, students rebuild the same application ideas in React using Vite, JSX, components, props, state, effects, forms, lists, API calls, and Tailwind.

During **Week 3**, students move application logic into Node.js and Express. They first build a text game as a CLI app, then expose that same game through HTTP/JSON routes, then add browser sessions so multiple browsers can participate in a shared MUD-lite world.

During the final meetings, students add authentication and protected routes, stabilize their projects, preview how MongoDB would replace in-memory state, and deploy/present their final full-stack app.

---

## 🎯 Course Outcome

Students should leave able to:

1. Explain how browsers, servers, HTTP requests, APIs, and runtime state fit together.
2. Build static and interactive browser pages using HTML, CSS, JavaScript, DOM APIs, and `fetch`.
3. Use Git/GitHub to track progress and submit work.
4. Create modern React applications with Vite.
5. Build reusable React components using JSX, props, state, effects, forms, and lists.
6. Use Tailwind as a productivity layer for styling React interfaces.
7. Run JavaScript outside the browser using Node.js.
8. Build an Express API that exposes application logic through HTTP and JSON.
9. Use browser sessions to connect repeated HTTP requests to the same browser/player.
10. Implement basic user authentication, protected API routes, and player ownership checks.
11. Connect a React frontend to an Express backend with `fetch`.
12. Deploy and present a small full-stack application.

---

## 🧩 Units of Study

### Unit 1: Browser Foundations

Students begin with the browser as the first runtime environment.

Key topics:

- **Web basics** – browser, server, client/server interaction, HTTP request/response
- **HTML** – document structure, elements, attributes, links, images, tables, forms, IDs, classes
- **UI scenes** – page flow, user stories, navigation, and multi-page application design
- **CSS** – selectors, colors, fonts, spacing, sizing, backgrounds, Flexbox/Grid, responsive design
- **JavaScript** – variables, functions, arrays, objects, conditionals, loops, random numbers, game logic
- **DOM APIs** – `querySelector`, `getElementById`, event listeners, callbacks, `innerHTML`
- **Modern JavaScript** – modules, imports/exports, arrow functions, template literals, destructuring, promises, `async/await`, `fetch`
- **Git/GitHub** – initialize, commit, view history, push, clone, and submit work

Primary Week 1 labs:

- **Lab 01: HTML Interactive Story**
- **Lab 02: CSS Styling / CSS Crash Course**
- **Lab 04: JS + DOM + Events Hi-Lo Game**
- **Lab 06: REST Client Quiz Game**

---

### Unit 2: React Frontend Development

Students rebuild familiar browser apps using React.

Key topics:

- **Node/npm** – local JavaScript runtime, packages, scripts, and project structure
- **Vite** – modern React development server and build workflow
- **React** – JSX, components, props, composition, component trees, folder organization
- **State** – `useState`, events, conditional rendering, runtime memory
- **Forms/lists** – controlled inputs, `map()`, keys, cards, reusable UI patterns
- **Effects** – `useEffect`, API fetching, loading states, and error states
- **Tailwind** – utility-first styling and reusable styled components

Primary Week 2 remakes:

- **React Remake 01: Interactive Story Shell**
- **React Remake 02: Story UI / Portfolio Components with Tailwind**
- **React Remake 03: Hi-Lo Game**
- **React Remake 04: Forms + Lists**
- **React Remake 05: REST Quiz**

The goal of Week 2 is for React to feel like a solution to problems students already experienced in Week 1: repeated HTML files, manual DOM mutation, query-string state, and hand-built UI reuse.

---

### Unit 3: Node, Express, Sessions, Auth, and Deployment

Students move application logic from browser memory into server memory.

Key topics:

- **Node.js** – JavaScript outside the browser, npm scripts, standard library, terminal I/O
- **CLI apps** – command-line interface as one possible interface to application logic
- **Express** – routes, middleware, JSON responses, request/response cycle
- **API design** – separating domain logic from interface logic
- **Server-owned state** – shared rooms, players, messages, commands, and world state
- **Browser sessions** – cookies, session IDs, `req.session`, anonymous player sessions
- **MUD-lite architecture** – multiple browsers interacting with one shared server world
- **React + Express** – `fetch`, CORS, polling, Tailwind UI, frontend/backend debugging
- **Authentication** – register, login, logout, password hashing, current-user endpoint
- **Authorization** – protected routes, player ownership, role/privilege checks
- **Persistence teaser** – how MongoDB would replace in-memory objects with collections
- **Deployment** – frontend hosting, backend hosting, environment variables, session secrets

Primary Week 3 / Week 4 labs:

- **Lab 11: Node CLI Text Adventure**
- **Lab 12: Express Interface to the Game**
- **Lab 13: Session-Backed MUD-lite Server**
- **Lab 14: Shared MUD-lite Gameplay**
- **Lab 15: React MUD Client**
- **Lab 16: Authenticated and Protected MUD Access**

---

## 🗓️ Course Roadmap

Two hours per day, Monday through Friday, from **July 6 through July 29**.

Total course length: **18 meetings / 36 contact hours**.

| Meeting | Topics | Lab / Deliverable |
| :---: | --- | --- |
| **Week 1** | **Browser Foundations with Original Client-Side Labs** | **Goal: understand what the browser loads, renders, remembers, forgets, and requests.** |
| Day 1 | Browser fundamentals, HTML documents, metadata, body content, links, assets, UI scenes, user stories, page flow, query strings, Git/GitHub setup | **Lab 01: HTML Interactive Story** — begin the full original story lab in class; complete/customize for homework |
| Day 2 | CSS selectors, declarations, colors, fonts, spacing, sizing, backgrounds, Flexbox/Grid, responsive layout | **Lab 02: CSS Styling** — style the interactive story or complete the CSS crash-course page, then apply those ideas to the story |
| Day 3 | JavaScript fundamentals: variables, functions, conditionals, random numbers, game logic, console debugging | **Lab 04 Part 1A: Hi-Lo Game Logic** — implement the game algorithm and basic browser inputs |
| Day 4 | DOM API, `getElementById`, `querySelector`, event listeners, callbacks, `innerHTML`, browser runtime state | **Lab 04 Part 1B: Hi-Lo DOM App** — complete the MVP browser app; MVC refactor optional |
| Day 5 | HTTP, REST APIs, JSON, `fetch`, `async/await`, JavaScript modules, local HTTP server, GitHub checkpoint | **Lab 06 Part 1: REST Quiz Game** — build a quiz app that fetches trivia data and renders it into the browser; leaderboard optional |
| **Week 2** | **React Remakes of Week 1 Apps** | **Goal: learn React by rebuilding familiar browser apps using components, state, props, effects, and Tailwind.** |
| Day 6 | Node.js, npm, Vite, React project structure, JSX, component trees, Tailwind setup | **React Remake 01: Interactive Story Shell** — convert Lab 01 scenes into React components |
| Day 7 | Components, props, composition, reusable layout, Tailwind utility styling, card/list/nav patterns | **React Remake 02: Story UI / Portfolio Components** — use the old Bootstrap portfolio structure as a design pattern, rebuilt with React + Tailwind |
| Day 8 | `useState`, event handlers, conditional rendering, runtime memory, replacing page reload/query-string state | **React Remake 03: Hi-Lo Game** — rebuild Lab 04 without direct DOM mutation |
| Day 9 | Lists with `map()`, keys, forms, controlled inputs, reusable form/card/list components | **React Remake 04: Forms + Lists** — task manager, inventory editor, contact form, portfolio cards, or story inventory UI |
| Day 10 | `useEffect`, API fetching, loading states, error states, componentized API views | **React Remake 05: REST Quiz** — rebuild Lab 06 as a complete React frontend |
| **Week 3** | **Node, Express, Sessions, and Shared Server State** | **Goal: move application logic outside the browser and let multiple browsers interact with one server-owned world.** |
| Day 11 | Node.js runtime, npm scripts, standard library, modules, terminal I/O, reusable application logic | **Lab 11: Node CLI Text Adventure** — build a command-line text game using Node and a reusable game engine |
| Day 12 | Express install, routes, JSON responses, request/response cycle, API design, separating interface from domain logic | **Lab 12: Express Interface to the Game** — expose the same text-game engine through HTTP endpoints |
| Day 13 | Stateless HTTP, cookies, browser sessions, session IDs, server-side session memory, anonymous player sessions | **Lab 13: Session-Backed MUD-lite Server** — track each browser session and associate it with a current player |
| Day 14 | Server-owned world state, multiple players, rooms, command history, player names, session-backed commands, CORS | **Lab 14: Shared MUD-lite Gameplay** — multiple browser sessions can join, move, see rooms, and send commands |
| Day 15 | React + Express integration, `fetch`, `useEffect`, polling, Tailwind UI, graphical room/player/inventory/message components | **Lab 15: React MUD Client** — build a graphical React frontend for the session-backed multiplayer text world |
| **Partial Week 4** | **Authentication, Project Polish, Persistence Teaser, and Deployment** | **Goal: connect browser sessions to users, protect game routes, stabilize final projects, and understand where databases fit next.** |
| Day 16 | Authentication vs session tracking, register/login/logout, password hashing, session user IDs, current-user endpoint, player ownership, protected API routes, redirect-to-login pattern | **Lab 16: Authenticated and Protected MUD Access** — add user accounts, protect game routes, and ensure only the correct user can access their player |
| Day 17 | Hack day, bug fixing, README, deployment prep, feature trimming, presentation prep; short MongoDB persistence teaser | **Project Work Day** — get final presentation functional; optional MongoDB discussion/example |
| Day 18 | Frontend deployment, backend deployment, environment variables, session secrets, production debugging, final demos | **Final Presentation** — deployed React + Express MUD-lite app with sessions/auth or approved full-stack adaptation |

---

## ✅ Weekly Checkpoints

### Checkpoint 1: Browser App Portfolio

Students submit a GitHub repository containing selected browser-native work from Week 1.

Required evidence:

```text
Lab 01 HTML Interactive Story
Lab 02 CSS-styled version or CSS application
Lab 04 Hi-Lo DOM MVP
Lab 06 REST Quiz Part 1
README with notes
Git history
At least one hosted/deployed browser app
```

Target outcome:

> A polished browser app using HTML, CSS, JavaScript, DOM events, `fetch`, and Git/GitHub — without React yet.

---

### Checkpoint 2: React Remake Portfolio

Students submit React versions of at least two Week 1 app ideas.

Required evidence:

```text
Vite + React project
Tailwind or intentional CSS styling
Reusable components
Props
useState
Events
Forms or lists
At least one useEffect/fetch example
README explaining what was remade from Week 1
```

Target outcome:

> A complete React frontend that rebuilds familiar browser-app ideas using components, state, props, forms/lists, effects, and API calls.

---

### Checkpoint 3: Full-Stack Shared-State App with Sessions and Auth

Students submit a Node/Express/React project showing the progression from terminal app to web app.

Required evidence:

```text
Node CLI text game
Reusable game engine module
Express API wrapper
Session-backed player identity
Shared server-owned world state
Multiple browser sessions
React + Tailwind frontend
fetch-based client/server communication
Register/login/logout
GET /api/auth/me endpoint
Protected API route middleware
Player ownership or role-based privilege check
README with run/deploy instructions
```

Target outcome:

> A React frontend connected to an Express backend where the backend owns shared application state, remembers browser sessions, authenticates users, and protects privileged routes.

---

## 🧪 Lab Philosophy

The required labs should form one clear story:

```text
Browser foundations
    ↓
React remakes
    ↓
Node/Express server state
    ↓
Sessions and authentication
    ↓
Deployment and presentation
```

The original labs are not discarded. They are reused strategically:

| Original Lab | Summer Use |
| --- | --- |
| Lab 01 HTML Interactive Story | Required Week 1 lab and later React remake |
| Lab 02 CSS Crash Course | Required Week 1 styling lab; apply concepts to story |
| Lab 03 Bootstrap Portfolio | Converted into React + Tailwind UI/component patterns |
| Lab 04 JS + DOM + Events | Required Week 1 Hi-Lo app; later React remake |
| Lab 05 Phaser Labs | Optional enrichment/archive |
| Lab 06 REST Client | Required Week 1 REST quiz; later React remake |
| Lab 07 Browser DB | Optional/archive; concepts reappear in MongoDB teaser |

---

## 🏁 Final Project Expectations

The final project should demonstrate a complete small full-stack application.

| Layer | Expected Evidence |
| --- | --- |
| **Frontend** | React components, props/state, forms or command input, API calls, responsive Tailwind UI |
| **Backend** | Node.js + Express server, routes, JSON request/response handling, reusable domain logic |
| **Shared State** | Server-owned world/game/application state, rooms, players, messages, inventory, or equivalent resources |
| **Sessions/Auth** | Session-backed identity, login/logout, current-user endpoint, protected route middleware |
| **Authorization** | Player ownership or privileged action checks |
| **Deployment** | Frontend online, backend online, project repository with README and final presentation |

Possible final project paths:

- MUD-lite adventure game
- Multiplayer room/chat explorer
- React text adventure with server-owned state
- Quiz game with shared scores
- Recipe/book/employee tracker using the same React + Express pattern
- Approved alternative

---

## 🧮 Grading

No exams. The emphasis is on building, debugging, explaining, committing, deploying, and presenting working software.

| Type | Description | % |
| --- | --- | ---: |
| **Labs** | Daily guided builds; most are reused, trimmed, or remade from the original client-side sequence. | 20 |
| **Weekly Exercises** | Checkpoints that show progress at the end of each major course phase. | 20 |
| **Participation** | Live coding, debugging, peer support, standups, and professional engagement. | 20 |
| **Final Project** | A deployed full-stack application using a React frontend and Node/Express backend. | 40 |

---

## 🛠️ Toolchain

Students will use:

- Chrome or another modern browser
- Browser DevTools
- VS Code or another code editor
- Git and GitHub
- Node.js
- npm
- Vite
- React
- Tailwind
- Express
- Express sessions / cookies
- bcrypt or similar password hashing library
- A frontend deployment host
- A backend deployment host

---

## 📚 Resources

### Frontend References

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [React Docs](https://react.dev/)
- [Vite Guide](https://vite.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Backend References

- [Node.js Learn](https://nodejs.org/en/learn)
- [npm Docs](https://docs.npmjs.com/)
- [Express Docs](https://expressjs.com/)
- [express-session](https://github.com/expressjs/session)
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

### Workflow References

- [Git Book](https://git-scm.com/book/en/v2)
- [GitHub Docs](https://docs.github.com/)

### Optional / Teaser References

- [MongoDB Docs](https://www.mongodb.com/docs/)
- [MongoDB University](https://learn.mongodb.com/)

---

## 🚀 Getting Started

1. Install required software.
2. Clone this repository.
3. Create a working branch or personal copy if instructed.
4. Complete labs in order.
5. Commit after each working milestone.
6. Push your work to GitHub.
7. Submit links according to the weekly checkpoint instructions.

Suggested commit rhythm:

```text
page loads
links working
styles applied
event handler working
state passes
fetch works
React component renders
API route responds
session tracks player
login works
deployed frontend
deployed backend
```

---

## 💬 Participation and Support

Students are expected to code along during live sessions, ask questions early, help debug with peers, and maintain a professional Git history.

When asking for help, include:

- what you expected to happen,
- what actually happened,
- the error message or screenshot,
- the file you think is involved,
- what you already tried.

---

## 🧭 Course Philosophy

This course is intentionally **opinionated**.

There are many languages, frameworks, and platforms that can be used to build web applications. This course chooses a JavaScript-centered path because JavaScript lets us study one language across the browser, React frontend, Node runtime, and Express backend.

That choice is not the only correct path. It is a teaching path.

The larger goal is to learn the **common roles and patterns** that appear across current and future web stacks:

```text
client interface
runtime state
component model
server routes
shared state
sessions
identity
authorization
data persistence
deployment
```

Once students can identify those roles, they can adapt the same mental model to other technologies and future frameworks.

---

## 📌 Final Course Arc

```text
Week 1:
HTML pages reveal scenes, links, query strings, browser memory, and page reload limits.

Week 2:
React remakes those scenes with components and runtime state.

Week 3:
Node/Express moves the game engine and shared state to the server.

Final meetings:
Sessions and authentication teach how web apps remember browsers, identify users, and protect privileged paths.
```

