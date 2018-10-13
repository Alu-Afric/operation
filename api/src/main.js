const cookieParser = require('cookie-parser');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
//app.use(cors);
app.use(bodyParser.json()); // support json encoded bodies
app.use(cookieParser());

//Connect mongo
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/aluafric";


app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-CSRF-TOKEN, knocks_csrf");
  res.header("'Access-Control-Allow-Credentials", "true");
  next();
});
console.log('BES');
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





app.listen(3000);