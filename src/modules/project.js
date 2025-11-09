export class Project {
	constructor(
		project_title,
		project_desc,
		project_date = {},
		project_status,
		project_task_list = [],
	) {
		const date = new Date()
		this.project_id = crypto.randomUUID
			? crypto.randomUUID()
			: this.generateUUID()
		this.project_title = project_title
		this.project_desc = project_desc
		this.project_date = {
			start_date: project_date.start_date || date.toDateString(),
			end_date: project_date.end_date || "",
		}
		this.project_status = project_status?.toLowerCase() || "open"
		this.project_task_list = project_task_list || []
	}
	addTask(task) {
		this.project_task_list.push(task)
	}
	removeTask(task_id) {
		this.project_task_list = this.project_task_list.filter(
			(task) => task.task_id !== task_id,
		)
	}

	getTaskById(task_id) {
		return this.project_task_list.find((task) => task.task_id === task_id)
	}

	getAllTasks() {
		return this.project_task_list
	}
	getPendingTasks() {
		return this.project_task_list.filter(
			(task) => task.task_status?.toLowerCase() === "pending",
		)
	}

	getCompletedTasks() {
		return this.project_task_list.filter(
			(task) => task.task_status?.toLowerCase() === "completed",
		)
	}

	updateStatus(status) {
		this.project_status = status?.toLowerCase() || this.project_status
	}
	getProgress() {
		const total = this.project_task_list.length
		if (total === 0) return 0
		const completed = this.getCompletedTasks().length
		return parseFloat(((completed / total) * 100).toFixed(2))
	}

	getSummary() {
		return {
			title: this.project_title,
			progress: this.getProgress(),
			status: this.project_status,
			desc: this.project_desc,
			id: this.project_id,
			date: this.project_date,
		}
	}
	generateUUID() {
		return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
			const r = (Math.random() * 16) | 0
			const v = c === "x" ? r : (r & 0x3) | 0x8
			return v.toString(16)
		})
	}
}
