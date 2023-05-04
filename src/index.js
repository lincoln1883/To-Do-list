import './style.css';
import dots from './assets/dots.svg';
import fresh from './assets/refresh.svg';
import returnIcon from './assets/return.svg';
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

const deleteBtn = document.querySelector('.delete-btn');

const form = document.querySelector('#input-form');
const taskInput = document.querySelector('#todo-input');
const submitBtn = document.querySelector('.submit-btn');

const returnImg = document.createElement('img');
returnImg.classList.add('return-icon');
returnImg.setAttribute('src', returnIcon);
submitBtn.appendChild(returnImg);

// function for displaying the list of tasks
const displayTask = () => {
	todoList.innerHTML = '';
	tasks.sort((a, b) => a.id - b.id);

	tasks.forEach((task) => {
		const taskItem = document.createElement('li');
		taskItem.innerHTML = `
    <div class="task">
      <input type="checkbox" id="task-${task.id}" ${
			task.completed ? 'checked' : ''
		}>
      <label class="task-label" for="task-${task.id}">${task.name}</label>
      <img class="option-icon" src=${dots}>
      </div>
      `;
		todoList.appendChild(taskItem);

		const taskLabel = taskItem.querySelector('.task-label');
		taskLabel.addEventListener('click', () => {
			task.completed = !task.completed;
			saveTasks();
			displayTask();
		});
		const taskDots = taskItem.querySelector('.option-icon');
		taskDots.addEventListener('click', () => {
			const taskId = task.id;
			const taskIndex = tasks.findIndex((task) => task.id === taskId);
			//const newTaskName = document.querySelector('#todo-input');
			taskInput.value = tasks[taskIndex].name;
			taskInput.dataset.taskId = taskId;
			taskInput.focus();
			//newTaskName.focus();
		});
	});
};

const saveTasks = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
	displayTask();
};

form.addEventListener('submit', addTask);

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const taskName = taskInput.value;
	const existingTask = taskInput.dataset.taskId;
	tasks = addTask(tasks, taskName, existingTask);
	saveTasks();
	taskInput.value = '';
	taskInput.dataset.taskId = '';
});

deleteBtn.addEventListener('click', () => {
	const checkedTasks = document.querySelectorAll(
		'input[type="checkbox"]:checked'
	);
	checkedTasks.forEach((checkbox) => {
		const taskItem = checkbox.closest('li');
		const taskId = parseInt(checkbox.id.split('-')[1]);
		tasks = removeTask(taskId, tasks);
		taskItem.remove();
	});
	saveTasks();
});

const editInput = document.querySelector('#todo-input');

editInput.addEventListener('click', () => {
	const taskId = editInput.dataset.taskId;
	const taskName = editInput.value;
	tasks = editTask(tasks, taskId, taskName);
	saveTasks();
});

window.onload = () => {
	displayTask();
};
