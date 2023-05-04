import tasks from './tasks';

const addTask = (e) => {
	e.preventDefault();
	const taskInput = document.querySelector('#todo-input');
	const taskName = taskInput.value.trim();
	if (!taskName) return;

	const existingTask = taskInput.dataset.taskId;
	if (existingTask) {
		const taskIndex = tasks.findIndex(
			(task) => task.id === parseInt(existingTask)
		);
		tasks[taskIndex].name = taskName;
		taskInput.dataset.taskId = '';
	} else {
		let newTask = {
			id: tasks.length + 1,
			name: taskName,
			completed: false,
			index: tasks.length,
		};

		tasks.push(newTask);
	}
	saveTasks();
	form.reset();
	displayTask();
};

export default addTask;
