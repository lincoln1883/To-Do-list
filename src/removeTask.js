const removeTask = (id, tasks) => {
  const newTasks = tasks.filter((task) => task.id !== id);
  return newTasks;
};

export default removeTask;
