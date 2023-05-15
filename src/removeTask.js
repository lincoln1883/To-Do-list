const removeTask = (taskId, tasks) => {
	if (tasks && tasks.length > 0) {
		const taskIndex = tasks.findIndex((task) => task.index === taskId);
		if (taskIndex !== -1) {
			tasks.splice(taskIndex, 1);

			for (let i = taskIndex; i < tasks.length; i += 1) {
				tasks[i].index = tasks[i].index - 1;
			}
		}
	}
	return tasks;
};

export default removeTask;
