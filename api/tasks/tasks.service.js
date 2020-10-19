const mongoService = require('../../services/mongo.service');
const moment = require('moment');
const { Console, clear } = require('console');
const ObjectId = require('mongodb').ObjectId;
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
		const db = await mongoService.connect();
		return await db.collection('tasks').insertOne(data);
	} catch (err) {
		return err;
	}
};

const moveToDoneOrUndone = async (data) => {
	try {
		let { ids, status } = data;
		ids = ids.map((id) => {
			id = ObjectId(id);
			return id;
		});
		// console.log({ids},{status})
		let statusToUpdate;
		status == 'NOT_DONE'
			? (statusToUpdate = 'DONE')
			: (statusToUpdate = 'NOT_DONE');
		const db = await mongoService.connect();
		return await db
			.collection('tasks')
			.updateMany(
				{ _id: { $in: ids } },
				{ $set: { status: statusToUpdate } },
				{ multi: true, upsert: false }
			);
	} catch (err) {
		return err;
	}
};

const editTask = async (data) => {
	try {
		let { _id, name, whenToDo } = data;
		_id = ObjectId(_id);
		const db = await mongoService.connect();
		return await db
			.collection('tasks')
			.updateOne({ _id: _id }, { $set: { name, whenToDo } });
	} catch (err) {
		return err;
	}
};

const removeTasks = async (data) => {
	try {
		data = data.map((id) => {
			id = ObjectId(id);
			return id;
		});
		const db = await mongoService.connect();
		return await db
			.collection('tasks')
			.deleteMany({ _id: { $in: data } }, {}, { multi: true });
	} catch (err) {}
};

module.exports = {
	getAllTasks,
	moveToDoneOrUndone,
	createNewTask,
	editTask,
	removeTasks,
};
