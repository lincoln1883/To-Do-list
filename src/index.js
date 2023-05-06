import './style.css';
import dots from './assets/dots.svg';
import fresh from './assets/refresh.svg';
import returnIcon from './assets/return.svg';
import trash from './assets/trash.svg';
import addTask from './addTask.js';
import removeTask from './removeTask.js';
import editTask from './editTask.js';
import completedTask from './checkedComplete.js';

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

// function for displaying the list of tasks
const saveTasks = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

const displayTask = () => {
	todoList.innerHTML = '';

	tasks.forEach((task, index) => {
		task.index = index + 1;

		const taskItem = document.createElement('li');
		taskItem.innerHTML = `
    <div class="task">
      <input type="checkbox" class="checkbox" data-task-id="task-${
				task.index
			}" ${task.completed ? 'checked' : ''}>
      <span class="task-label" for="task-${task.index}">${task.name}</span>
      <img class="option-icon" src=${dots}>
      </div>
      `;
		todoList.appendChild(taskItem);

		const taskLabel = taskItem.querySelector('.task-label');

		const checkbox = taskItem.querySelector(
			`[data-task-id="task-${task.index}"]`
		);
		if (checkbox) {
			checkbox.addEventListener('click', (e) => {
				task.completed = checkbox.checked;
				if (task.completed) {
					deleteBtn.classList.remove('disabled');
				} else {
					deleteBtn.classList.add('disabled');
				}
				saveTasks();
				displayTask();
			});
		}

		const taskDots = taskItem.querySelector('.option-icon');
		taskDots.addEventListener('click', () => {
			const taskId = task.index;
			const taskIndex = tasks.findIndex((task) => task.index === taskId);

			const newInput = document.createElement('input');
			newInput.classList.add('edit-input');
			newInput.setAttribute('type', 'text');
			newInput.value = tasks[taskIndex].name;

			const trashIcon = document.createElement('img');
			trashIcon.classList.add('trash-icon');
			trashIcon.setAttribute('src', trash);

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

form.addEventListener('submit', addTask);

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

deleteBtn.addEventListener('click', () => {
	tasks = completedTask(tasks);
	saveTasks();
	displayTask();
});

image.addEventListener('click', (e) => {
	e.target.classList.toggle('rotate');
	saveTasks();
	displayTask();
});

window.onload = () => {
	displayTask();
};
