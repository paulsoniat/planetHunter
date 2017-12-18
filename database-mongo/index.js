var mongoose = require('mongoose');
//connect to your server here
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

// var itemSchema = mongoose.Schema({
//   quantity: Number,
//   description: String
// });

// var Item = mongoose.model('Item', itemSchema);

// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

var userSchema = mongoose.Schema({
  username: String,
  //maybe add other things here
});
var User = mongoose.model('User', userSchema);

var shipSchema = mongoose.Schema({
  shipName: String,
  shipSpeed: String,
  imageURL: String
  //maybe add other things here
});
var Ship = mongoose.model('Ship', shipSchema);

var partnerSchema = mongoose.Schema({
  partnerName: String,
  partnerDescription: String,
  imageURL: String
  //maybe add other things here
});
var Partner = mongoose.model('Partner', partnerSchema);

var planetSchema = mongoose.Schema({
  planetName: String,
  planetDescription: String,
  imageURL: String
  //maybe add other things here
});
var Planet = mongoose.model('Planet', planetSchema);



var JediProfile = mongoose.Schema({
  username: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  ship: {
    type: Schema.Types.ObjectId, ref: 'Ship'
  },
  Partner: {
    type: Schema.Types.ObjectId, ref: 'Partner'
  },
  Planet: {
    type: Schema.Types.ObjectId, ref: 'Planet'
  }
})

module.exports.User = User;
module.exports.Ship = Ship;
module.exports.Planet = Planet;
module.exports.Partner = Partner;
module.exports.JediProfile = JediProfile;