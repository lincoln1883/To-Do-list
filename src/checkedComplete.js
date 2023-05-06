import removeTask from './removeTask.js';

const completedTask = (tasks, index) => {
  if (Array.isArray(tasks)) {
    removeTask(index, tasks);
    return tasks.filter((task) => !task.completed);
  }
  return tasks;
};

export default completedTask;
