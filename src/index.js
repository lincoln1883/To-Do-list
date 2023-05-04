import './style.css';
import dots from './assets/dots.svg';
import fresh from './assets/refresh.svg';
import returnIcon from './assets/return.svg';

// Create a function to display the task list

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
const returnImg = document.createElement('img');
returnImg.classList.add('return-icon');
returnImg.setAttribute('src', returnIcon);
form.appendChild(returnImg);

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
			const newTaskName = document.querySelector('#todo-input');
			taskInput.value = tasks[taskIndex].name;
			taskInput.dataset.taskId = taskId;
			newTaskName.focus();
		});
	});
};

const saveTasks = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
	displayTask();
};

// function for adding a new task
const addTask = (e) => {
	e.preventDefault();
	const taskInput = document.querySelector('#todo-input');
	const taskName = taskInput.value.trim();
	if (!taskName) return;

	const existingTask = taskInput.dataset.taskId;
	if (existingTask) {
		const taskIndex = tasks.findIndex(
			(task) => task.id === parseInt(existingTask)
		);
		tasks[taskIndex].name = taskName;
		taskInput.dataset.taskId = '';
	} else {
		let newTask = {
			id: tasks.length + 1,
			name: taskName,
			completed: false,
			index: tasks.length,
		};

		tasks.push(newTask);
	}
	saveTasks();
	form.reset();
	displayTask();
};

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

window.onload = () => {
	displayTask();
};
