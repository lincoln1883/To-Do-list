const editTask = (tasks, taskId, taskName) => {
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId, 10));
  if (taskIndex !== -1) {
    tasks[taskIndex].name = taskName.trim();
  }

  return tasks;
};

export default editTask;