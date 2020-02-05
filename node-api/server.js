const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
var mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
     { useUnifiedTopology: true }
);

requireDir('./src/models');

app.use('/api', require("./src/routes"));

app.listen(3001);