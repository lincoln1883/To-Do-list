import './style.css';
import dots from './assets/dots.svg';
import fresh from './assets/refresh.svg';
import returnIcon from './assets/return.svg';

// Create a function to display the task list

let task = JSON.parse(localStorage.getItem('tasks')) || [];

const todoList = document.querySelector('.todo-list');
const textContainer = document.querySelector('.todo-text__container');
const image = document.createElement('img');
image.classList.add('refresh-icon');
image.setAttribute('src', fresh);
textContainer.appendChild(image);

const form = document.querySelector('#input-form');
const returnImg = document.createElement('img');
returnImg.classList.add('return-icon');
returnImg.setAttribute('src', returnIcon);
form.appendChild(returnImg);

// function for displaying the list of tasks
const displayTask = () => {
	todoList.innerHTML = '';
	task.sort((a, b) => a.id - b.id);

	task.forEach((task, id) => {
		const taskItem = document.createElement('li');
		const div = document.createElement('div');
		div.classList.add('task');
		const input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.checked = task.completed;
		const icon = document.createElement('img');
		icon.classList.add('option-icon');
		icon.setAttribute('src', dots);
		const span = document.createElement('span');
		span.innerText = task.name;
		div.appendChild(input);
		div.appendChild(span);
		div.appendChild(icon);
		taskItem.appendChild(div);
		todoList.appendChild(taskItem);

		task.id = id + 1;
	});

	localStorage.setItem('tasks', JSON.stringify(task));
};

const saveTasks = () => {
	localStorage.setItem('tasks', JSON.stringify(task));
	displayTask();
};

// function for adding a new task
const addTask = (name) => {
	let newTask = {
		id: task.length + 1,
		name: name,
		completed: false,
	};

	task.push(newTask);
	saveTasks();
};

const removeTask = (id) => {
	const taskIndex = task.findIndex((task) => task.id === id);
	task.splice(taskIndex, 1);
	task.forEach((task, id) => {
		task.id = id;
	});
	saveTasks();
};

const todoInput = document.querySelector('#todo-input');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let inputValue = todoInput.value.trim();
	console.log(inputValue);
	if (inputValue !== '') {
		addTask(inputValue);
	}
});

window.onload = () => {
	displayTask();
};
