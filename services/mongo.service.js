let dbConn = null;
let prmConn = null;
const dbURL = 'mongodb://localhost:27017/eight200test'

function connectToMongo(){
	if (prmConn) return prmConn;
	// Reuse existing connection if exist
	if (dbConn) return Promise.resolve(dbConn);

    const MongoClient = require('mongodb').MongoClient;
    
    prmConn = MongoClient.connect(dbURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}).then((client) => {
		console.log('[MONGO SERVICE]new connection to db');
		prmConn = null;

		client.on('close', () => {
			console.log('MongoDB Disconnected');
			dbConn = null;
			client.close();
        });
        dbConn = client.db();
	    return dbConn;
	});
    return prmConn;
}

module.exports = {
    connect:connectToMongo
}