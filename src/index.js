import './style.css';
import dots from './assets/dots.svg';
import fresh from './assets/refresh.svg';
import returnIcon from './assets/return.svg';
import trash from './assets/trash.svg';
import addTask from './addTask.js';
import removeTask from './removeTask.js';
import editTask from './editTask.js';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const todoList = document.querySelector('.todo-list');
const textContainer = document.querySelector('.todo-text__container');
const image = document.createElement('img');
image.classList.add('refresh-icon');
image.setAttribute('src', fresh);
textContainer.appendChild(image);

const form = document.querySelector('#input-form');
const taskInput = document.querySelector('#todo-input');
const submitBtn = document.querySelector('.submit-btn');

const returnImg = document.createElement('img');
returnImg.classList.add('return-icon');
returnImg.setAttribute('src', returnIcon);
submitBtn.appendChild(returnImg);

const deleteBtn = document.querySelector('.delete-btn');

//function for saving the tasks
const saveTasks = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

// function for displaying the list of tasks
const displayTask = () => {
	todoList.innerHTML = '';

	tasks.sort((a, b) => a.index - b.index);
	tasks.forEach((task) => {
		const taskItem = createTaskItem(task);
		todoList.appendChild(taskItem);

		const checkbox = taskItem.querySelector('.checkbox');
		const taskLabel = taskItem.querySelector('.task-label');

		if (checkbox) {
			checkbox.addEventListener('click', () => {
				task.completed = checkbox.checked;
				deleteBtn.classList.toggle('disabled', !task.completed);
				saveTasks();
				displayTask();
			});
		}

		const taskDots = taskItem.querySelector('.option-icon');
		taskDots.addEventListener('click', (e) => {
			e.target.parentNode.style.backgroundColor = 'bisque';
			const taskId = task.index;
			const taskIndex = tasks.findIndex((task) => task.index === taskId);

			const newInput = createEditInput(tasks[taskIndex].name);
			const trashIcon = createTrashIcon();

			taskLabel.replaceWith(newInput);
			taskDots.replaceWith(trashIcon);

			newInput.focus();

			newInput.addEventListener('change', () => {
				const taskName = newInput.value;
				tasks = editTask(tasks, taskId, taskName);
				saveTasks();
				displayTask();
			});

			trashIcon.addEventListener('click', () => {
				removeTask(taskId, tasks);
				saveTasks();
				displayTask();
			});
		});
	});
};

// function for adding a task
const createTaskItem = (task) => {
	const taskItem = document.createElement('li');
	taskItem.innerHTML = `
    <div class="task">
      <input type="checkbox" class="checkbox" data-task-id="${task.index}" ${
		task.completed ? 'checked' : ''
	}>
      <span class="task-label ${task.completed ? 'checked' : ''}"  for="task-${
		task.index
	}">${task.name}</span>
      <img class="option-icon" src=${dots}>
    </div>
  `;
	return taskItem;
};

// function for creating the edit input
const createEditInput = (value) => {
	const newInput = document.createElement('input');
	newInput.classList.add('edit-input');
	newInput.setAttribute('type', 'text');
	newInput.value = value;
	return newInput;
};

// function for creating the trash icon
const createTrashIcon = () => {
	const trashIcon = document.createElement('img');
	trashIcon.classList.add('trash-icon');
	trashIcon.setAttribute('src', trash);
	return trashIcon;
};

form.addEventListener('submit', addTask);

// function for adding the tasks
submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const taskName = taskInput.value;
	const existingTaskId = parseInt(taskInput.dataset.taskId, 10) || null;
	tasks = addTask(tasks, taskName, existingTaskId);
	displayTask();
	saveTasks();
	taskInput.value = '';
	taskInput.dataset.taskId = '';
});

// function for deleting the tasks
deleteBtn.addEventListener('click', () => {
	const completedTasks = tasks.filter((task) => task.completed === true);
	if (completedTasks.length > 0) {
		completedTasks.forEach((task) => {
			tasks = removeTask(task.index, tasks);
		});
		saveTasks();
		displayTask();
	}
});

image.addEventListener('click', (e) => {
	e.target.classList.toggle('rotate');
	saveTasks();
	displayTask();
});

window.onload = () => {
	displayTask();
};
