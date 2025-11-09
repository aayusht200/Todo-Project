export function initRenderProject(uiState) {
	const app = uiState.app
	const project = app.getProjectById(uiState.currentProjectId)

	const appContainer = document.getElementById("app")
	if (!project) {
		appContainer.textContent = "Project not found."
		return
	}
	appContainer.append(renderProjectHeader(project), renderProjectBody(project))
}
function renderProjectHeader(project) {
	//projectHeader
	const projectHeader = document.createElement("div")
	projectHeader.classList.add("projectHeader")

	//projectTitle
	const titleDiv = document.createElement("div")
	titleDiv.classList.add("titleDiv")
	const title = document.createElement("h1")
	title.classList.add("projectTitle", "hoverEffect")
	title.classList.add("appHome")
	title.textContent = project?.project_title
		? `./Home/${project?.project_title}`
		: "ToDo App"
	titleDiv.append(title)

	const buttonGroup = document.createElement("div")
	buttonGroup.classList.add("button-group")
	//deleteProject
	const deleteProjectDiv = document.createElement("div")
	deleteProjectDiv.classList.add("button-group")
	const deleteProject = document.createElement("button")
	deleteProject.classList.add("removeProject", "cancelButton")
	deleteProject.textContent = "Remove Project"
	deleteProjectDiv.append(deleteProject)
	//addTask
	const addTaskDiv = document.createElement("div")
	addTaskDiv.classList.add("button-group")
	const addTask = document.createElement("button")
	addTask.classList.add("addTask", "add-button")
	addTask.textContent = "Add Task"
	addTaskDiv.append(addTask)
	buttonGroup.append(deleteProjectDiv, addTaskDiv)
	//projectDesc
	const descDiv = document.createElement("div")
	descDiv.classList.add("descDiv")
	const desc = document.createElement("p")
	desc.classList.add("desc")
	desc.textContent = project?.project_desc || "Description Not Given"
	descDiv.append(desc)

	//projectDate
	const dateDiv = document.createElement("div")
	dateDiv.classList.add("dateDiv")
	const date = document.createElement("p")
	date.classList.add("date")
	date.textContent = project?.project_date?.start_date
		? `${project?.project_date.start_date} / ${project?.project_date.end_date}`
		: "Date Not Given"
	dateDiv.append(date)

	projectHeader.append(titleDiv, buttonGroup, descDiv, dateDiv)
	return projectHeader
}

function renderProjectBody(project) {
	const taskList = project?.getAllTasks?.() || []
	//table
	const taskView = document.createElement("div")
	if (taskList.length === 0) {
		taskView.textContent = "No tasks yet!"
		taskView.classList.add("warning")
		return taskView
	}
	taskView.classList.add("taskView")
	//tableHeader
	const tableHeader = document.createElement("div")
	tableHeader.classList.add("tableHeader")
	const headers = [
		"title",
		"description",
		"status",
		"priority",
		"date",
		"modifiers",
	]
	headers.forEach((element) => {
		const header = document.createElement("div")
		header.classList.add(`table-${element}`)
		const h3 = document.createElement("h3")
		h3.classList.add(element)
		h3.textContent = element.toLocaleUpperCase()
		header.append(h3)
		tableHeader.append(header)
	})
	taskView.append(tableHeader)
	taskList.forEach((element) => {
		const div = document.createElement("div")
		div.dataset.id = element.task_id
		div.classList.add("taskData")
		//taskTitle
		const taskTitle = document.createElement("div")
		taskTitle.classList.add("taskTitle")
		const title = document.createElement("p")
		title.classList.add("title")
		title.textContent = element.title
		taskTitle.appendChild(title)
		//taskDesc
		const taskDesc = document.createElement("div")
		taskDesc.classList.add("taskDesc")
		const desc = document.createElement("p")
		desc.classList.add("desc")
		desc.textContent = element.desc
		taskDesc.appendChild(desc)
		//taskStatus
		const taskStatus = document.createElement("div")
		taskStatus.classList.add("taskStatus")
		const status = document.createElement("p")
		status.classList.add("status")
		status.textContent = element.status
		taskStatus.appendChild(status)
		//taskPriority
		const taskPriority = document.createElement("div")
		taskPriority.classList.add("taskPriority")
		const priority = document.createElement("p")
		priority.classList.add("priority")
		priority.textContent = element.priority
		taskPriority.appendChild(priority)
		//taskDate
		const taskDate = document.createElement("div")
		taskDate.classList.add("taskDate")
		const date = document.createElement("p")
		date.classList.add("date")
		if (element.taskDate.startDate && element?.taskDate?.endDate) {
			date.textContent = `${element.taskDate.startDate} / ${element.taskDate.endDate}`
		} else {
			date.textContent = "Date Not Given"
		}
		taskDate.appendChild(date)
		//taskButtonGroup
		const taskButtonGroup = document.createElement("div")
		taskButtonGroup.classList.add("taskButtonGroup")
		const button = document.createElement("button")
		button.classList.add("button", "removeTask", "cancelButton")
		button.textContent = "Remove Task"
		// button.dataset.id = element.id;
		taskButtonGroup.appendChild(button)
		div.append(
			taskTitle,
			taskDesc,
			taskStatus,
			taskPriority,
			taskDate,
			taskButtonGroup,
		)
		taskView.appendChild(div)
	})
	return taskView
}
