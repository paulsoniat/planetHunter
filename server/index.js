var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var db = require('../database-mongo');

require('dotenv').config();
const { PORT } = process.env

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
    const newUser = new db.User({
      username : req.body.username
    })
    newUser.save((err) => {
      if (err) {
        return console.error(err)
      }
    });
    console.log(req.body, "this is body");
    res.send(statusCode, req.body)
  }
})


app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});

