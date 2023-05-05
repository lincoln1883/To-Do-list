const addTask = (tasks, taskName, existingTaskId) => {
	if (!taskName) {
		return tasks;
	}

	if (existingTaskId) {
		const taskIndex = tasks.findIndex(
			(task) => task.index === parseInt(existingTaskId, 10)
		);
		tasks[taskIndex].name = taskName;
	} else {
		const newTask = {
			name: taskName,
			completed: false,
			index: tasks.length + 1,
		};
		tasks.push(newTask);
	}

	return tasks;
};

export default addTask;
