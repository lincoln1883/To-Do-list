export const completedTask = (tasks, index) => {
	if (Array.isArray(tasks)) {
		const newTasks = tasks.map((task) => {
			if (task.index === index) {
				return {
					...task,
					completed: true,
				};
			}
			return task;
		});

		return newTasks.filter((task) => !task.completed);
	}

	return tasks;
};

export const addTask = (tasks, taskName, existingTaskId) => {
	if (!taskName) return tasks;
	if (existingTaskId) {
		const taskIndex = tasks.findIndex((task) => task.index === existingTaskId);
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

export const editTask = (tasks, taskId, taskName) => {
	if (tasks && tasks.length > 0) {
		const taskIndex = tasks.findIndex((task) => task.index === taskId);
		if (taskIndex !== -1) {
			tasks[taskIndex].name = taskName;
			return tasks;
		}
	}
	return tasks;
};

export const removeTask = (taskId, tasks) => {
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
