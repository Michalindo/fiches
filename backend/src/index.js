const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = 3001;
const ponsApiRoutes = require('./routes/ponsApi');
// const mongoose = require('mongoose');
// const mongooseUrl = 'mongodb://localhost:27017/fiches';

app.use(cors());

app.use('/ponsApi', ponsApiRoutes);

app.listen(port, () =>
	console.log(`Express app listening at http://localhost:${port}`)
);
