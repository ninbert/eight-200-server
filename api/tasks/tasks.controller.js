
const taskService = require('./tasks.service')


const getAllTasks = async (req, res) => {
	const result = await taskService.getAllTasks();
	res.send(result);
};


module.exports = {
	getAllTasks
};