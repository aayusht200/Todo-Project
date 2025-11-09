# ToDo App - Personal Study Concepts

## JavaScript Concepts

### 1. OOP (Object-Oriented Programming)
- **Classes**: `Project`, `Task`, `AppLogic`
- **Methods** for managing tasks and projects
- **Encapsulation**: private-like data via closures (none fully private in current code, but structured methods)
- **UUID Generation** for unique IDs

### 2. Modules & Imports
- ES6 modules with `export` and `import`
- Separate UI modules for home, project, and forms
- Central `index.js` to coordinate rendering

### 3. DOM Manipulation
- `document.createElement`, `append`, `classList` usage
- Dynamic rendering with `innerHTML` clearing before rendering
- Event delegation for global click handling
- Closest ancestor selection using `closest()`

### 4. State Management
- `uiState` object to track current view and current project ID
- Switch-case logic to decide which UI to render

### 5. LocalStorage
- Save project list in JSON format
- Rebuild class instances from storage
- `resetData()` method for initial dummy data

### 6. Validation & Error Handling
- Input validation (required fields, start/end date checks)
- Alerts for user feedback
- Console warnings for missing project/task references

### 7. CSS Concepts
- **CSS Variables** for theme colors, padding, fonts
- **Grid and Flexbox** for layout
- **3D card flip effect** using `transform` and `backface-visibility`
- **Reusable classes** for buttons, inputs, and cards
- **Hover effects** and transitions

### 8. UI Components Structure
- **Home view**: project grid
- **Project view**: tasks table
- **Forms**: add project / add task
- **Headers** with navigation

### 9. Event Handling
- Single listener for `document` click events
- Switch logic based on button class names
- Data attributes for identifying projects and tasks

### 10. Miscellaneous
- Default values for task dates and statuses
- Computed properties like project progress
- Clear separation of concerns: logic vs UI
- Progressive enhancement with modern JS features (ES6)

---

**Tip:** Use this file for understanding code structure, JS patterns, and CSS tricks. Reference it while coding to ensure you follow best practices.

