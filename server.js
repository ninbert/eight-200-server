const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const corsOptions = {
    allowOrigin: '*'
}

app.use(cors(corsOptions))
const PORT = 8200;
app.listen(PORT, () => {
    console.log(`app is running on port `+ PORT)
});