var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
//connected server to client here
app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

// app.get('/', function (req, res) {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log("helloooooo in res");
//     res.send(200)
//   }
// });


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

