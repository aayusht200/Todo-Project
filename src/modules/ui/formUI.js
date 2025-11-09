export function initRenderFormAddProject() {
	const appHome = document.getElementById("app")
	appHome.append(renderAddProjectHeader(), addProjectBody())
	function renderAddProjectHeader() {
		//appheader
		const homeHeader = document.createElement("div")
		homeHeader.classList.add("homeHeader", "header-div")
		//apptitle
		const titleDiv = document.createElement("div")
		titleDiv.classList.add("titleDiv")
		const title = document.createElement("h1")
		title.classList.add("title", "page-title", "hoverEffect")
		title.classList.add("appHome")
		title.textContent = "ToDo App"
		titleDiv.append(title)
		//addproject
		const cancelButtonDiv = document.createElement("div")
		cancelButtonDiv.classList.add("button-group")
		const cancelButton = document.createElement("button")
		cancelButton.classList.add("appHome", "cancelButton")
		cancelButton.textContent = "Cancel"
		cancelButtonDiv.append(cancelButton)
		homeHeader.append(titleDiv, cancelButtonDiv)
		return homeHeader
	}
	function addProjectBody() {
		const inputDiv = document.createElement("div")
		inputDiv.classList.add("addProjectBody")
		const title = inputField({
			type: "text",
			id: "titleInput",
			labelText: "Project Title",
			placeholder: "Project Name",
			required: true,
			className: "input",
		})
		const start_date = inputField({
			type: "date",
			id: "startDateInput",
			labelText: "Project Start Date",
			className: "dateInput",
		})
		const end_date = inputField({
			type: "date",
			id: "endDateInput",
			labelText: "Project End Date",
			className: "dateInput",
		})

		const status = inputField({
			type: "text",
			id: "statusInput",
			labelText: "Project Status",
			placeholder: "Project Status",
			required: true,
			className: "input",
		})
		const wrapper = document.createElement("div")
		wrapper.classList.add("descInputDiv", "input-group")

		const label = document.createElement("label")
		const id = "descInput"
		label.setAttribute("for", id)
		label.textContent = "Project Description"

		const textarea = document.createElement("textarea")
		textarea.id = id
		textarea.name = id
		textarea.placeholder = "Enter project description..."
		textarea.required = true
		textarea.classList.add("input", "textarea")

		// Append children
		wrapper.append(label, textarea)

		const submitProject = document.createElement("button")
		submitProject.classList.add("submitProject", "submitButton")
		submitProject.textContent = "Submit"

		inputDiv.append(title, start_date, end_date, wrapper, status, submitProject)
		return inputDiv
	}
}
export function initRenderFormAddTask(uiState) {
	const app = uiState.app
	const project = app.getProjectById(uiState.currentProjectId)

	const appContainer = document.getElementById("app")
	if (!project) {
		appContainer.textContent = "Project not found."
		return
	}
	appContainer.append(renderAddTaskHeader(project), addTaskBody())
	function renderAddTaskHeader(project) {
		const addTaskHeader = document.createElement("div")
		addTaskHeader.classList.add("addTaskHeader", "header-div")

		// Title
		const titleDiv = document.createElement("div")
		titleDiv.classList.add("titleDiv")
		const title = document.createElement("h1")
		title.classList.add("projectTitle", "projectHome", "hoverEffect")
		title.textContent = project?.project_title
			? `./Home/${project.project_title}`
			: "ToDo App"
		titleDiv.append(title)

		// Cancel button
		const cancelButtonDiv = document.createElement("div")
		cancelButtonDiv.classList.add("cancelButtonDiv")
		const cancelButton = document.createElement("button")
		cancelButton.type = "button"
		cancelButton.classList.add("projectHome", "cancelButton")
		cancelButton.textContent = "Cancel"
		cancelButtonDiv.append(cancelButton)

		addTaskHeader.append(titleDiv, cancelButtonDiv)

		return addTaskHeader
	}
	function addTaskBody() {
		const inputDiv = document.createElement("div")
		inputDiv.classList.add("addTaskBody")
		const title = inputField({
			type: "text",
			id: "titleInput",
			labelText: "Task Title",
			placeholder: "Task Name",
			required: true,
			className: "input",
		})
		const start_date = inputField({
			type: "date",
			id: "startDateInput",
			labelText: "Task Start Date",
			className: "dateInput",
		})
		const end_date = inputField({
			type: "date",
			id: "endDateInput",
			labelText: "Task End Date",
			className: "dateInput",
		})
		const status = inputField({
			type: "text",
			id: "statusInput",
			labelText: "Task Status",
			placeholder: "Task Status",
			required: true,
			className: "input",
		})
		const priority = inputField({
			type: "text",
			id: "priorityInput",
			labelText: "Task Priority",
			placeholder: "Task Priority",
			required: true,
			className: "input",
		})
		const wrapper = document.createElement("div")
		wrapper.classList.add("input-group", "descInputDiv")

		const label = document.createElement("label")
		const id = "descInput"
		label.setAttribute("for", id)
		label.textContent = "Project Description"

		const textarea = document.createElement("textarea")
		textarea.id = id
		textarea.name = id
		textarea.placeholder = "Enter task description..."
		textarea.required = true
		textarea.classList.add("input", "textarea")

		// Append children
		wrapper.append(label, textarea)
		const submitProject = document.createElement("button")
		submitProject.classList.add("submitTask", "submitButton")
		submitProject.textContent = "Submit"

		inputDiv.append(
			title,
			start_date,
			end_date,
			wrapper,
			status,
			priority,
			submitProject,
		)
		return inputDiv
	}
}

function inputField({
	type = "text",
	id,
	labelText,
	placeholder = "",
	value = "",
	required = false,
	className = "",
}) {
	const wrapper = document.createElement("div")
	wrapper.classList.add("input-group")

	const label = document.createElement("label")
	label.setAttribute("for", id)
	label.textContent = labelText

	const input = document.createElement("input")
	input.type = type
	input.id = id
	input.name = id
	input.placeholder = placeholder
	input.value = value
	if (required) input.required = true
	if (className) input.classList.add(className)

	wrapper.append(label, input)
	return wrapper
}
