const cookieParser = require('cookie-parser');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
//Routes
import userRouter from '~/routes/userRouter';
app.use('/app/models/users', userRouter);
//app.use(cors);
 // support json encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Cookies
app.use(cookieParser());

// Configuring the database

import mongoose from 'mongoose';
const db = mongoose.connect('mongodb://localhost:27017/aluafric');

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-CSRF-TOKEN, knocks_csrf");
  res.header("'Access-Control-Allow-Credentials", "true");
  next();
});
app.post('/try', function (req, res ) {
  MongoClient.connect(url, function(err, db ) {
     if (err) throw err;
     db.collection("users").insertOne(req.body, function(err, res) {
       if (err) throw err;

       db.close();
     });
   });
   res.send('done');
});





app.listen(3000, () => {
    console.log("Alu Afric Server is listening on port 3000 ...");
});