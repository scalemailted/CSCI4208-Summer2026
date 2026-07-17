# CAPSTONE PROJECT — Thick-Client SPA (Local-First + REST)

Build a **single-page application** (SPA) where the **compute, rendering, and state live in the browser**. Read public data with `fetch` (**GET**) and write a small public artifact (**PUT/POST**) to a course-approved service such as JSONBin. Persist personal state locally so the application can **relaunch from saved state and remain usable offline**.

Choose **one** application track:

**Productivity • Analytics • Games / Entertainment**

---

## 🎯 What You’ll Build

- **Rendering stack — choose one:**  
  DOM/Components (Vanilla, Web Components, Lit, React, Vue), Canvas/WebGL (Phaser, Canvas, PixiJS, p5, Three.js), or Visualization/Maps (D3, Plotly, Chart.js, ECharts, Leaflet, MapLibre).

  **You own the orchestration:** state → render, lifecycles, interactions, and effects. The project should not consist only of isolated library calls.

- **Architecture:**  
  A single HTML shell with a client-side router or view manager, **at least 6 meaningful ES modules**, and **at least 3 meaningful classes** with clear responsibilities such as model, system/controller, service, renderer, or view.

- **Networking:**  
  At least one meaningful **public GET** from an open API, published CSV/JSON source, or another approved service. Include loading, empty, success, and error states plus an appropriate TTL cache.

- **Cloud write:**  
  At least one **PUT or POST** of a small, non-sensitive public artifact such as a preset, run, result, shared view, leaderboard entry, or anonymous aggregate count.

- **Local-first behavior:**  
  Autosave and restore meaningful application state using `localStorage` or IndexedDB. The application should render from local state before waiting for the network.

- **Professional delivery:**  
  A responsive, documented, deployable application that feels like complete software and is ready for the final capstone demonstration.

---

## 🗓️ Capstone Timeline — 7 Development Days

- **Sprint 1 — Days 1–2: Pitch and Roadmap Proposal**  
  Define the product, confirm technical feasibility, document the architecture, validate data services, and organize the development board.

- **Sprint 2 — Days 3–4: MVP Vertical Slice**  
  Build the smallest end-to-end version demonstrating:

  `input → state → render → GET → PUT/POST → local persistence`

- **Sprint 3 — Days 5–7: Feature Complete, Polish, and Demo**  
  Complete the planned features, deepen interaction, improve responsiveness, finalize documentation, deploy the application, and prepare the demonstration.

---

## ✅ Minimum Requirements

### 1. Architecture

- Single HTML shell with a client-side router or explicit view manager
- **At least 6 meaningful ES modules**
- **At least 3 meaningful domain or application classes**
- Clear responsibilities across models, services, systems/controllers, renderers, and views
- Client-side validation, state transitions, rendering, and error handling

### 2. Rendering

- Deep integration of the selected rendering stack
- Application code owns composition, data flow, lifecycles, and effects
- Meaningful interactions such as buttons, forms, keyboard input, mouse/touch gestures, timers, simulations, or real-time loops
- User actions visibly follow:

  `input → state change → re-render or system response`

- Primary views resize gracefully for:
  - Laptop: at least `1280 × 720`
  - Tablet: at least `768px` wide

If the application requires a specific context, such as keyboard input or landscape orientation, detect unsupported conditions and show a clear **Requirements / Not Supported** screen.

### 3. Networking and Local-First Behavior

- Public `GET` using `fetch` with `async` / `await`
- Visible loading, empty, success, and error states
- Appropriate TTL caching for public data
- Cloud `PUT` or `POST` for a small, non-sensitive artifact
- Restore saved state from local storage during startup
- Render local state before waiting for the network
- Merge local and cloud data using a documented policy
- Autosave after meaningful state changes
- Use clear storage keys and include a schema version

> **Implementation notes:** For JSONBin, prefer `GET /latest` with `PUT` where appropriate. Cache public reads for approximately 30–60 minutes unless the data source requires a different policy. Document a simple deterministic merge strategy, such as last-write-wins using `updated_ts`.

---

## 📦 Repository and Deployment

**Recommended layout** — adapt as needed for your selected stack:

```text
your-capstone/
├── index.html                    # Single HTML shell
├── src/                          # ES modules
│   ├── state/                    # Central store and application state
│   ├── models/                   # Domain classes
│   ├── services/                 # Public API, cloud, and local persistence
│   ├── ui/                       # Components and views
│   ├── routes/                   # Router or view manager
│   ├── engine-or-viz/            # Renderer, scenes, charts, or maps
│   └── utils/
├── docs/                         # Planning and course deliverables
│   ├── pitch.md
│   ├── roadmap.md
│   ├── architecture_sketch.md
│   ├── endpoints.md
│   ├── jsonbin_schema.md
│   ├── dod-sprint1.md
│   ├── dod-sprint2.md
│   ├── dod-sprint3.md
│   └── media/
└── README.md                     # Public-facing 