const removeTask = (taskId, tasks) => {
  const taskIndex = tasks.findIndex((task) => task.index === taskId);
  if (taskIndex !== -1) {
    tasks.sort((a, b) => a - b).splice(taskIndex, 1);

    for (let i = taskIndex; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
  }
  return tasks;
};

export default removeTask;
