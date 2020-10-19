const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./api/tasks/tasks.routes')

const app = express();
const corsOptions = {
    allowOrigin: '*'
}

// Enabling Cors
app.use(cors(corsOptions))

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Registering routes
app.use('/api/tasks', taskRoutes);



const PORT = 8200;
app.listen(PORT, () => {
    console.log(`app is running on port `+ PORT)
});