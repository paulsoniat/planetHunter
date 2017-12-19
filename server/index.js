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


app.delete('/users', function (req, res) {
  console.log('in delete')
  if (!req.body) {
    return res.sendStatus(400)
  }
  else {
    var statusCode = 201
    var query = db.User.find().remove({ username: `${req.body.username}` })
    query.exec()
    res.send(statusCode, req.body)
  }
})

app.post('/ships', function (req, res) {
  
  // const { ship } = req.body;
  for(var key in req.body.ship) {
    if (key === "undefined") {
      delete req.body.ship.com
    }
  }
  for (var key in req.body.ship) {
    console.log(key)
  }
  // console.log(name, "this is ship name!@!#!$$!")
  if (!req.body) {
    return res.sendStatus(400)
  }
  else {
    var statusCode = 201
    const newShip = new db.Ship({
      shipData: req.body.ship.name,
      username: req.body.username,
    })
    newShip.save((err) => {
      if (err) {
        return console.error(err)
      }
    });
    // console.log(req.body, "this is body");
    res.send(statusCode, req.body)
  }
})

app.put('/ships', function (req, res) {
  console.log(req.body, "this is the bodyasfgasfaf");
  if (!req.body) {
    return res.sendStatus(400)
  }
  else {
    //find the ship with matching username and change it to the ship provided
    statusCode = 200;
    //not actually updating
    var query = db.Ship.update({ username: `${req.body.username}` }, { username: `${req.body.username}`, ship: `${req.body.ship}`})
    query.exec()
    res.send(statusCode, req.body)
  }
})



// app.listen(PORT, function() {
//   console.log(`listening on port ${PORT}!`);
// });

app.listen(3000, function() {
  console.log(`listening on port 3000!`);
});

