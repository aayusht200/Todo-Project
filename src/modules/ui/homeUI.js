export function initRenderHome(uiState) {
	const app = uiState.app
	const appHome = document.getElementById("app")
	appHome.append(renderHomeHeader(), renderHomeBody(app))
}
function renderHomeHeader() {
	//appheader
	const homeHeader = document.createElement("div")
	homeHeader.classList.add("homeHeader", "header-div")
	//apptitle
	const titleDiv = document.createElement("div")
	titleDiv.classList.add("titleDiv")
	const title = document.createElement("h1")
	title.classList.add("title", "page-title", "appHome")
	title.textContent = "ToDo App"
	titleDiv.append(title)
	//addproject
	const addProjectDiv = document.createElement("div")
	addProjectDiv.classList.add("button-group")
	const addProject = document.createElement("button")
	addProject.classList.add("addProject", "add-button")
	addProject.textContent = "Add Project"
	addProjectDiv.append(addProject)

	homeHeader.append(titleDiv, addProjectDiv)
	return homeHeader
}

function renderHomeBody(app) {
	const projectGrid = document.createElement("div")
	projectGrid.classList.add("projectGrid")
	const projectList = app.getAllProjects()
	projectList.forEach((element) => {
		//card_creation
		const projectCard = document.createElement("div")
		projectCard.classList.add("projectCard")
		const cardContent = document.createElement("div")
		cardContent.classList.add("cardContent")
		projectCard.dataset.id = element.project_id

		//cardFront
		const cardFront = document.createElement("div")
		cardFront.classList.add("cardFront")
		//cardTitle-projectTitle
		const cardTitle = document.createElement("h2")
		cardTitle.classList.add("cardTitle")
		cardTitle.textContent = element.project_title
		//cardStatus-projectStatus
		const cardStatus = document.createElement("p")
		cardStatus.classList.add("cardStatus")
		cardStatus.textContent = element.project_status
		cardFront.append(cardTitle, cardStatus)
		//cardBack
		const cardBack = document.createElement("div")
		cardBack.classList.add("cardBack")
		//cardDesc-projectDesc
		const cardDesc = document.createElement("p")
		cardDesc.classList.add("cardDesc")
		cardDesc.textContent = element.project_desc

		cardBack.append(cardDesc)
		cardContent.append(cardFront, cardBack)
		projectCard.append(cardContent)
		projectGrid.append(projectCard)
	})
	return projectGrid
}
