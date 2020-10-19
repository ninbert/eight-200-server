
const taskService = require('./tasks.service')


const getAllTasks = async (req, res) => {
	const result = await taskService.getAllTasks();
	res.send(result);
};

const createNewTask = async (req,res) => {
    const result = await taskService.createNewTask(req.body)
    res.send(result)
}


module.exports = {
	getAllTasks,
	createNewTask,
};