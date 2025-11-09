# README.md

# ToDo App

A simple ToDo application built with vanilla JavaScript, HTML, and CSS, using OOP principles.  
Manage projects and tasks with dynamic forms, localStorage persistence, and a clean UI.

## Features

- Add, view, and remove **Projects**
- Add, view, and remove **Tasks** within each project
- Task status and priority management
- Project progress calculation based on task completion
- LocalStorage persistence
- Responsive, modern interface with 3D project cards

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Open `template.html` in a browser
3. Start managing your projects and tasks

## Usage

- **Home view:** See all projects in a grid
- **Add Project:** Click "Add Project" to create a new project
- **Project view:** Click a project card to see tasks, add tasks, or remove the project
- **Add Task:** Fill the task form, including title, description, status, and priority
- **Remove Tasks/Projects:** Use the "Remove" button

## Technologies Used

- JavaScript (ES6 Modules, OOP)
- HTML5
- CSS3 (Grid, Flexbox, 3D card effect)
- LocalStorage for persistence

## Folder Structure

```
├─ index.html
├─ styles/
│   └─ main.css
├─ modules/
│   ├─ logic.js
│   ├─ project.js
│   ├─ task.js
│   ├─ dummyData.js
│   └─ ui/
│       ├─ homeUI.js
│       ├─ projectUI.js
│       └─ formUI.js
└─ template.html
```
## License

MIT License