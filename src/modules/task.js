export class Task {
	constructor(title, desc, taskDate = {}, status, priority) {
		const date = new Date()
		this.task_id = crypto.randomUUID ? crypto.randomUUID() : this.generateUUID()

		this.title = title
		this.desc = desc
		this.taskDate = {
			startDate: taskDate.startDate || date.toDateString(),
			endDate: taskDate.endDate || "",
		}
		this.status = status?.toLowerCase() || "pending"
		this.priority = priority?.toLowerCase() || "low"
	}
	updateStatus(status) {
		if (status) this.status = status.toLowerCase()
	}
	updateDate(date) {
		this.taskDate = {
			startDate: date.startDate,
			endDate: date.endDate,
		}
	}
	updatePriority(priority) {
		this.priority = priority?.toLowerCase() || "low"
	}
	toggleComplete() {
		this.status =
			this.status?.toLowerCase() === "pending" ? "complete" : "pending"
	}
	getSummary() {
		return {
			title: this.title,
			desc: this.desc,
			status: this.status,
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
