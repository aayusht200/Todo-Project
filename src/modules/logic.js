import { createDummyData } from "./dummyData.js"
import { Project } from "./project.js"
import { Task } from "./task.js"

export class AppLogic {
	constructor() {
		this.projectList = []
		this.loadFromStorage()
		if (this.projectList.length === 0) this.resetData()
	}

	// --- Project Management ---
	createProject(title, desc, date) {
		this.projectList.push(new Project(title, desc, date, "open", []))
		this.saveToStorage()
	}

	deleteProject(project_id) {
		this.projectList = this.projectList.filter(
			(project) => project.project_id !== project_id,
		)
		this.saveToStorage()
	}

	getAllProjects() {
		return this.projectList
	}

	getProjectById(project_id) {
		return this.projectList.find((project) => project.project_id === project_id)
	}

	// --- Task Management ---
	addTaskToProject(project_id, taskData) {
		const currentProject = this.getProjectById(project_id)
		if (!currentProject) return console.warn("Project not found")

		const currentTask = new Task(
			taskData.title,
			taskData.desc,
			taskData.date,
			taskData.status,
			taskData.priority,
		)
		currentProject.addTask(currentTask)
		this.saveToStorage()
	}

	removeTaskFromProject(project_id, task_id) {
		const currentProject = this.getProjectById(project_id)
		if (!currentProject) return console.warn("Project not found")

		currentProject.removeTask(task_id)
		this.saveToStorage()
	}

	updateTaskStatus(project_id, task_id, status) {
		const currentProject = this.getProjectById(project_id)
		if (!currentProject) return console.warn("Project not found")

		const currentTask = currentProject.getTaskById(task_id)
		if (!currentTask) return console.warn("Task not found")

		currentTask.updateStatus(status)
		this.saveToStorage()
	}

	// --- Utility / Summary ---
	getAppSummary() {
		return this.projectList.map((project) => project.getSummary())
	}

	// --- Storage ---
	saveToStorage() {
		localStorage.setItem("projectList", JSON.stringify(this.projectList))
	}

	loadFromStorage() {
		const storedData = JSON.parse(localStorage.getItem("projectList"))
		if (!storedData) return []

		// Rebuild real Project and Task instances
		this.projectList = storedData.map((element) => {
			const project = new Project(
				element.project_title,
				element.project_desc,
				element.project_date,
				element.project_status,
				[],
			)

			;(element.project_task_list || []).forEach((element) => {
				const task = new Task(
					element.title,
					element.desc,
					element.taskDate,
					element.status,
					element.priority,
				)

				project.addTask(task)
			})

			return project
		})

		return this.projectList
	}

	// --- Dev / Debug ---
	resetData() {
		this.projectList = createDummyData()
		this.saveToStorage()
	}
}
