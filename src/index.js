const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const router = require('./router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errors());


app.listen(3333, () => console.log("Server on"));