# 🧩 To-Do App — Developer-Oriented Architecture Document

## 1. System Overview
The To-Do App is a modular, front-end project management tool that allows users to create and manage **Projects** and their associated **Tasks**. Each Project can have multiple tasks, and all data persists locally using the **Web Storage API**.

The design emphasizes **separation of concerns** — keeping business logic, data models, DOM manipulation, and storage management in isolated modules for clarity and scalability.

---

## 2. File & Folder Structure

```
todo-app/
│
├── dist/                       # Webpack build output
├── src/
│   ├── index.js                # Entry point (initializes app)
│   ├── modules/
│   │   ├── project.js          # Project factory/class
│   │   ├── task.js             # Task factory/class
│   │   ├── storage.js          # Handles localStorage logic
│   │   ├── logic.js            # Core business logic controller
│   │   ├── ui/
│   │   │   ├── homeUI.js       # Home page layout and DOM handling
│   │   │   ├── projectUI.js    # Project detail page rendering
│   │   │   ├── formUI.js       # Handles add/edit forms
│   │   │   └── components.js   # Shared UI components (buttons, modals)
│   │   └── helpers/
│   │       └── dateUtils.js    # Utility for date formatting (using date-fns)
│   ├── styles/
│   │   ├── main.css            # Global styling
│   │   └── components.css      # Component-specific styles
│   └── assets/                 # Images/icons
│
├── package.json
├── webpack.config.js
└── README.md
```

---

## 3. Module Responsibilities & Function Requirements

### **project.js**
- Defines Project object model.
- Properties: `title`, `description`, `dateStart`, `dateEnd`, `status`, `tasks[]`.
- Handles adding/removing tasks from its internal list.

### **task.js**
- Defines Task object model.
- Properties: `title`, `description`, `dateStart`, `dateEnd`, `priority`, `notes`, `status`.
- Methods to toggle completion, update priority, and modify notes.

### **logic.js**
- Central controller connecting UI and data layers.
- Handles CRUD for projects and tasks.
- Updates state, triggers UI refresh, and syncs data to storage.
- Acts as single source of truth for application state.

### **storage.js**
- Handles all interactions with `localStorage`.
- Functions:
  - `saveProjects()` — saves all data as JSON.
  - `loadProjects()` — restores and reconstructs objects.
  - `clearData()` — clears stored app data.

### **ui/homeUI.js**
- Displays all projects in a summary table.
- Columns: Title | Pending Tasks | Status.
- Connects “Add Project” button to formUI.
- Click on project opens detailed project page.

### **ui/projectUI.js**
- Renders selected project’s details.
- Lists tasks with title, due date, priority, and status.
- Allows edit/delete of tasks and project info.

### **ui/formUI.js**
- Displays modal forms for creating/editing projects and tasks.
- Validates user input.
- Passes structured data back to logic.js for processing.

### **ui/components.js**
- Centralized UI components: buttons, modal templates, icons.
- Ensures consistent visual and structural design.

### **helpers/dateUtils.js**
- Uses `date-fns` for date formatting and comparisons.
- Handles due date calculations and “overdue” checks.

---

## 4. UI Component Mapping

| UI Section | Description | Responsible Module(s) |
|-------------|--------------|------------------------|
| Header | Displays app title, user name, Add Project button | `homeUI.js`, `formUI.js` |
| Project Table | Lists all projects with task count & status | `homeUI.js`, `logic.js` |
| Project Page | Displays selected project with its tasks | `projectUI.js`, `logic.js` |
| Task Cards | Shows individual task info and priority | `projectUI.js` |
| Add/Edit Modal | Collects user input for new/edit entities | `formUI.js` |
| Storage Sync | Loads/saves state | `storage.js` |
| Date Formatting | Formats start/end dates and due warnings | `dateUtils.js` |

---

## 5. Data Model & Storage Logic

- **Project → Tasks (One-to-Many Relationship)**
- Each Project stores its own task list.
- All data is serialized into JSON and saved in `localStorage` under a single key (e.g., `todoData`).
- On app load:
  - Check for existing data in storage.
  - Reconstruct Project and Task objects.
  - Re-render home UI.

---

## 6. Development Cycle (Phase-by-Phase)

### **Phase 1: Initialization**
- Setup project folder and Webpack.
- Create placeholder modules and UI skeleton.

### **Phase 2: Core Data Models**
- Implement `project.js` and `task.js` object structures.
- Test creation and modification logic via console.

### **Phase 3: Application Logic**
- Build `logic.js` to handle CRUD operations and data relationships.

### **Phase 4: UI Development**
- Create static UI layout (Home + Project Page).
- Implement DOM manipulation logic for project/task rendering.

### **Phase 5: Integration**
- Link UI to `logic.js` functions.
- Ensure two-way data updates between UI and data.

### **Phase 6: Persistence**
- Implement `storage.js` with JSON serialization.
- Test save/load cycles and data retention on reload.

### **Phase 7: Testing & Refinement**
- Validate UI behaviors, edge cases, and user flows.
- Add styling polish and responsive layout.

---

## 7. Future Scalability & Enhancements
- Add filters (by status, priority, date).
- Include drag-and-drop task organization.
- Integrate search and sorting logic.
- Optional backend integration (IndexedDB / Firebase).
- Convert UI modules into reusable React/Vue components.

---

**End of Document**
