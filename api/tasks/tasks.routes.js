const express = require('express');
const router = express.Router();
const { getAllTasks, createNewTask } = require('./tasks.controller');

router.get('/getAllTasks', getAllTasks);
router.post('/createNewTask', createNewTask);


module.exports = router;