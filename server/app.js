const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")
const booksRouter = require('./routes/books');

require("dotenv").config();
require("./config/mongo");

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', booksRouter);

module.exports = app;
