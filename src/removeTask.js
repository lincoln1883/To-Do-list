const removeTask = (id) => {
	console.log('removeTask called with id', id);
	tasks = tasks.filter((task) => task.id !== id);
	console.log('tasks after filter', tasks);
	saveTasks();
};

form.addEventListener('submit', addTask);

deleteBtn.addEventListener('click', () => {
	const checkedTasks = document.querySelectorAll(
		'input[type="checkbox"]:checked'
	);
	checkedTasks.forEach((checkbox) => {
		const taskItem = checkbox.closest('li');
		const taskId = parseInt(checkbox.id.split('-')[1]);
		removeTask(taskId);
		taskItem.remove();
	});
});
