
const taskService = require('./tasks.service')


const getAllTasks = async (req, res) => {
	const result = await taskService.getAllTasks();
	res.send(result);
};

const createNewTask = async (req,res) => {
    const result = await taskService.createNewTask(req.body)
    res.send(result)
}

const moveToDoneOrUndone = async (req, res) => {
	const result = await taskService.moveToDoneOrUndone(req.body);
	res.send(result);
};

const removeTasks = async (req,res) => {
    console.log(req)
    const result = await taskService.removeTasks(req.body);
	res.send(result);
}

const editTask = async (req,res) => {
    const result = await taskService.editTask(req.body);
	res.send(result);
}

module.exports = {
	getAllTasks,
    createNewTask,
    editTask,
	moveToDoneOrUndone,
	removeTasks,
};