const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(express.json());

//routes
// const apiRouter = require('./routes')

// app.use('/api', apiRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));