import "./styles/main.css";
import { AppLogic } from "./modules/logic.js";
import {
	initRenderFormAddProject,
	initRenderFormAddTask,
} from "./modules/ui/formUI.js";
import { initRenderHome } from "./modules/ui/homeUI.js";
import { initRenderProject } from "./modules/ui/projectUI.js";

const uiState = {
	app: new AppLogic(),
	view: "home",
	currentProjectId: null,
};

renderApp(uiState);
setupGlobalEventHandlers(uiState);
// localStorage.clear();

export function renderApp(uiState) {
	const appHome = document.getElementById("app");
	appHome.innerHTML = "";

	switch (uiState.view) {
		case "home":
			initRenderHome(uiState);
			break;
		case "project":
			initRenderProject(uiState);
			break;
		case "addProject":
			initRenderFormAddProject();
			break;
		case "addTask":
			initRenderFormAddTask(uiState);
			break;
		default:
			console.error("Unknown view:", uiState.view);
			resetUIState();
	}
}

export function resetUIState() {
	uiState.view = "home";
	uiState.currentProjectId = null;
	renderApp(uiState);
}

function setupGlobalEventHandlers(uiState) {
	document.addEventListener("click", (e) => {
		const { target } = e;

		// === NAVIGATION ===
		if (target.classList.contains("addProject")) {
			uiState.view = "addProject";
			renderApp(uiState);
		}

		if (target.classList.contains("addTask")) {
			uiState.view = "addTask";
			renderApp(uiState);
		}

		if (target.classList.contains("appHome")) {
			resetUIState();
		}

		const projectCard = target.closest(".projectCard");
		if (projectCard) {
			uiState.view = "project";
			uiState.currentProjectId = projectCard.dataset.id;
			renderApp(uiState);
		}

		if (target.classList.contains("projectHome")) {
			uiState.view = "project";
			renderApp(uiState);
		}

		//removeProject
		if (target.classList.contains("removeProject")) {
			uiState.app.deleteProject(uiState.currentProjectId);
			resetUIState();
		}
		//removeTask
		if (target.classList.contains("removeTask")) {
			const id = e.target.closest(".taskData").dataset.id;
			uiState.app.removeTaskFromProject(uiState.currentProjectId, id);
			uiState.view = "project";
			renderApp(uiState);
		}

		if (target.classList.contains("submitProject")) {
			// === ADD PROJECT ===
			e.preventDefault();

			const title = document.getElementById("titleInput").value.trim();
			const desc = document.getElementById("descInput").value.trim();
			const startDate = document.getElementById("startDateInput").value;
			const endDate = document.getElementById("endDateInput").value;
			const status = document.getElementById("statusInput").value.trim();

			// Validation
			if (!title || !desc || !status) {
				alert(
					"Please fill all required fields: Title, Description, and Status.",
				);
				return;
			}

			if (startDate && endDate && endDate < startDate) {
				alert("End date cannot be earlier than start date.");
				return;
			}

			// Create Project
			uiState.app.createProject(
				title,
				desc,
				{ start_date: startDate, end_date: endDate },
				status,
			);

			uiState.view = "home";
			renderApp(uiState);
		}

		// === ADD TASK ===
		if (target.classList.contains("submitTask")) {
			e.preventDefault();

			const title = document.getElementById("titleInput").value.trim();
			const desc = document.getElementById("descInput").value.trim();
			const startDate = document.getElementById("startDateInput").value;
			const endDate = document.getElementById("endDateInput").value;
			const status = document.getElementById("statusInput").value.trim();
			const priority = document.getElementById("priorityInput").value.trim();

			// Validation
			if (!title || !desc || !status || !priority) {
				alert(
					"Please fill all required fields: Title, Description, Status, and Priority.",
				);
				return;
			}

			if (startDate && endDate && endDate < startDate) {
				alert("End date cannot be earlier than start date.");
				return;
			}

			// Add Task
			const taskData = {
				title,
				desc,
				date: { startDate, endDate },
				status,
				priority,
			};

			uiState.app.addTaskToProject(uiState.currentProjectId, taskData);
			uiState.view = "project";
			renderApp(uiState);
		}
	});
}
