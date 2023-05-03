import './style.css';
import dots from './assets/dots.svg';
import fresh from './assets/refresh.svg';

// Create a function to display the task list

let task = [
	{
		id: 1,
		name: 'Learn React',
		completed: false,
	},
	{
		id: 2,
		name: 'Learn Node',
		completed: false,
	},
	{
		id: 3,
		name: 'Learn SQL',
		completed: false,
	},
	{
		id: 4,
		name: 'Learn Express',
		completed: true,
	},
	{
		id: 5,
		name: 'Mongo DB',
		completed: true,
	},
];

const todoList = document.querySelector('.todo-list');
const textContainer = document.querySelector('.todo-text__container');
const image = document.createElement('img');
image.classList.add('refresh-icon');
image.setAttribute('src', fresh);
textContainer.appendChild(image);

const displayTask = () => {
	todoList.innerHTML = '';
	task.sort((a, b) => a.id - b.id);

	task.forEach((task) => {
		let taskItem = document.createElement('li');
		let div = document.createElement('div');
		div.classList.add('task');
		let input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.checked = task.completed;
		let icon = document.createElement('img');
		icon.classList.add('option-icon');
		icon.setAttribute('src', dots);
		let span = document.createElement('span');
		span.innerText = task.name;
		div.appendChild(input);
		div.appendChild(span);
		div.appendChild(icon);
		taskItem.appendChild(div);
		todoList.appendChild(taskItem);
	});
};

window.onload = () => {
	displayTask();
};
