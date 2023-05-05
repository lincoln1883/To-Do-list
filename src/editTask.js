const editTask = (tasks, taskId, taskName) => {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].name = taskName;

    return tasks;
  }
  return tasks;
};

export default editTask;
