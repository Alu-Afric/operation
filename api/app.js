const cookieParser = require('cookie-parser');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var morgan = require('morgan');
var path = require('path');
//cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-CSRF-TOKEN, knocks_csrf");
  res.header("'Access-Control-Allow-Credentials", "true");
  next();
});

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
//Routes
app.use('/user',require('Routes/user'));
//Start the Server
app.listen(3000, function() {
    console.log(new Date().toISOString() + ": server startedssss on port 3000");
});