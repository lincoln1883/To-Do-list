const addTask = (tasks, taskName, existingTaskId) => {
  if (!taskName) {
    return tasks;
  }

  if (existingTaskId) {
    const taskIndex = tasks.findIndex(
      (task) => task.id === parseInt(existingTaskId, 10),
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
