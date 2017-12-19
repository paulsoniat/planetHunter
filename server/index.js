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

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// POST /login gets urlencoded bodies 
app.post('/users', function (req, res) {
  if (!req.body) {
    return res.sendStatus(400)
  }
  else {
    var statusCode = 201
    console.log(req.body);
    res.send(statusCode, req.body)
  }
})


// app.post('/users', function (req, res) {
//   //want to create a new user schema
//   //then save that user to the users db


//   //parse readable body into a stream? 
//   console.log(req)
//     console.log("helloooooo in post res");
//     res.send(201)
// });


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

