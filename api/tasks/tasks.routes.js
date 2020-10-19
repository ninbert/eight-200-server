const express = require('express');
const router = express.Router();
const {
	getAllTasks,
	createNewTask,
	moveToDoneOrUndone,
    removeTasks,
    editTask
} = require('./tasks.controller');

router.get('/getAllTasks', getAllTasks);
router.post('/createNewTask', createNewTask);
router.post('/moveToDoneOrUndone', moveToDoneOrUndone);
router.post('/removeTasks', removeTasks);
router.post('/editTask', editTask);


module.exports = router;