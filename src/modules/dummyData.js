import { Project } from "./project.js"
import { Task } from "./task.js"

export function createDummyData() {
	// 🟢 Project 1
	const project1 = new Project(
		"Frontend Redesign",
		"Revamp the landing page using new UI guidelines.",
		{ start_date: "2025-10-01", end_date: "2025-11-10" },
		"open",
		[],
	)

	const task1 = new Task(
		"Create wireframes",
		"Design basic wireframes for home and about page.",
		{ startDate: "2025-10-01", endDate: "2025-10-03" },
		"completed",
		"high",
	)

	const task2 = new Task(
		"Implement responsive layout",
		"Use Flexbox and Grid for full responsiveness.",
		{ startDate: "2025-10-04", endDate: "2025-10-08" },
		"pending",
		"medium",
	)

	project1.addTask(task1)
	project1.addTask(task2)

	// 🟢 Project 2
	const project2 = new Project(
		"Todo App",
		"Build a simple to-do list app with localStorage.",
		{ start_date: "2025-09-20", end_date: "2025-10-20" },
		"completed",
		[],
	)

	const task3 = new Task(
		"Setup project structure",
		"Define webpack, src folder, and base classes.",
		{ startDate: "2025-09-20", endDate: "2025-09-25" },
		"completed",
		"low",
	)

	const task4 = new Task(
		"Add task and project modules",
		"Implement OOP structure with save/load features.",
		{ startDate: "2025-09-26", endDate: "2025-10-05" },
		"completed",
		"medium",
	)

	project2.addTask(task3)
	project2.addTask(task4)

	// Return as list
	return [project1, project2]
}
