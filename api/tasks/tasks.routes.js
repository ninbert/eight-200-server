const express = require('express');
const router = express.Router();
const { getAllTasks } = require('./tasks.controller');

router.get('/getAllTasks', getAllTasks);


module.exports = router;