const mongoService = require('../../services/mongo.service');
const moment = require('moment')
const getAllTasks = async () => {
	try {
		const db = await mongoService.connect();
		return await db.collection('tasks').find({}).toArray();
	} catch (err) {
		return err;
	}
};

const createNewTask = async (data) => {
        try {
            data.createdAt = moment(Date.now()).format('DD-MM-YYYY')
            data.whenToDo = moment(data.whenToDo).format('DD-MM-YYYY');
            const db = await mongoService.connect()
            return await db.collection('tasks').insertOne(data)
		} catch (err) {
            return err
        }
    
}

module.exports = {
    getAllTasks,
    createNewTask
};
