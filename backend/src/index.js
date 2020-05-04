const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = 3001;
const mongoose = require('mongoose');
const mongoDb = 'mongodb://localhost:27017/fiches';

mongoose.connect(mongoDb, { useUnifiedTopology: true }, () => {
	console.log('connected to DB!');
});

app.use(cors());
app.use(bodyParser.json());
const ponsApiRoutes = require('./routes/ponsApiRoutes');
app.use('/ponsApi', ponsApiRoutes);

const fichesRoutes = require('./routes/fichesRoutes');
app.use('/fiches', fichesRoutes);

app.listen(port, () =>
	console.log(`Express app listening at http://localhost:${port}`)
);
