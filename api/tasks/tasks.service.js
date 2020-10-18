const mongoService = require('../../services/mongo.service');

const getAllTasks = async () => {
    try{
        const db = await mongoService.connect();
        return await db.collection('tasks').find({}).toArray();
    }catch(err){
        return err
    }
    
}

module.exports = {
	getAllTasks
};