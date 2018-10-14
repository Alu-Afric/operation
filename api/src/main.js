const cookieParser = require('cookie-parser');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var path = require('path');

// support json encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Cookies
app.use(cookieParser());

//cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-CSRF-TOKEN, knocks_csrf");
  res.header("'Access-Control-Allow-Credentials", "true");
  next();
});

// Configuring the database
import mongoose from 'mongoose';
const db = mongoose.connect('mongodb://localhost:27017/aluafric');
import userRouter from './routes/userRouter';
app.use('/Models/users', userRouter);

app.listen(3000, function() {
    console.log(new Date().toISOString() + ": server started on port 3000");
});