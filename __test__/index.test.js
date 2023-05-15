import { JSDOM } from 'jsdom';
import { addTask } from './functionMockTest.js';
import { removeTask } from './functionMockTest.js';
import { editTask } from './functionMockTest.js';
import { completedTask } from './functionMockTest.js';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = window.document;

describe('add a task', () => {
	let tasks;

	beforeEach(() => {
		tasks = [
			{
				index: 1,
				name: 'name',
				completed: false,
			},
			{
				index: 2,
				name: 'new name',
				completed: true,
			},
		];
	});

	it('should not add item to localStorage if name is empty', () => {
		const result = addTask(tasks, '', 1);
		expect(result).toBe(tasks);
	});
	it('should add a new task to the task array', () => {
		const result = addTask(tasks, 'New Task', 1);
		expect(result[0].name).toBe('New Task');
	});
});

describe('remove task', () => {
	it('should remove a task with given id', () => {
		const idToRemove = 1;
		const list = [
			{
				index: 1,
				name: 'New Name',
				completed: true,
			},
		];

		removeTask(idToRemove);
		expect(list[0].index).toBe(1);
	});
	it('should remove only matching id', () => {
		const nextId = 2;
		const list = [
			{
				index: 1,
				name: 'New Name',
				completed: true,
			},
			{
				index: 2,
				name: 'Old Name',
				completed: false,
			},
		];

		removeTask(nextId);
		expect(list[0]).not.toBe(1);
	});
});

describe('edit tasks', () => {
	let tasks;

	beforeEach(() => {
		tasks = [
			{ name: 'Task 1', completed: false, index: 1 },
			{ name: 'Task 2', completed: false, index: 2 },
		];
	});

	it('should edit the name of the task selected', () => {
		editTask(tasks, 1, 'New task item');
		expect(tasks[0].name).toBe('New task item');
	});
	it('should not edit task if id is incorrect', () => {
		editTask(tasks, 'New task item', 1);
		expect(tasks[1].name).not.toBe('New task item');
	});
});

describe('completed task', () => {
	let tasks;

	beforeEach(() => {
		tasks = [
			{ name: 'Task 1', completed: false, index: 1 },
			{ name: 'Task 2', completed: true, index: 2 },
		];
	});

	it('should mark a task as completed', () => {
		completedTask(tasks);
		expect(tasks[1].completed).toEqual(true);
	});
	it('should not mark a task as completed if id is incorrect', () => {
		const result = completedTask(tasks, 3, true);
		expect(result[0]).not.toBe(true);
	});
});
