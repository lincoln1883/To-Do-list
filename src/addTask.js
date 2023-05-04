const addTask = (tasks, taskName, existingTask) => {
	if (!taskName) {
		return tasks;
	}

	if (existingTask) {
		const taskIndex = tasks.findIndex(
			(task) => task.id === parseInt(existingTask)
		);
		tasks[taskIndex].name = taskName;
	} else {
		const newTask = {
			id: tasks.length + 1,
			name: taskName,
			completed: false,
			index: tasks.length,
		};
		tasks.push(newTask);
	}

	return tasks;
};

export default addTask;
