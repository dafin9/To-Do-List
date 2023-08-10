const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res, next) => {
	try {
		const tasks = await Task.find();
		res.render('index', { tasks });
	} catch (error) {
		console.error('Error fetching tasks:', error);
		res.status(500).send('Internal Server Error');
	}
});

router.post('/', async (req, res) => {
	const { description } = req.body;
	const task = new Task({ description, completed: false });

	try {
		await newTask.save();
		res.redirect('/');
	} catch (error) {
		console.error('Error adding task:', error);
		res.status(500).send('Internal Server Error');
	}
});

module.exports = router;
