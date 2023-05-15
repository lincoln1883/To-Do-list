const editTask = (tasks, taskId, taskName) => {
  if (tasks && tasks.length > 0) {
    const taskIndex = tasks.findIndex((task) => task.index === taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex].name = taskName;
      return tasks;
    }
  }
  return tasks;
};

export default editTask;