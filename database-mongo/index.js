var mongoose = require('mongoose');
//connect to your server here
mongoose.connect('mongodb://planetfinder:planetfinder@ds159926.mlab.com:59926/planethunter');
var db = mongoose.connection;
db.on('error', function() {
  console.log('mongoose connection error');
});
db.once('open', function() {
  console.log('mongoose connected successfully');
});

var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  username: String,
  //maybe add other things here
});
var User = mongoose.model('User', userSchema);

var shipSchema = mongoose.Schema({
  shipData: String,
  username: String
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

// module.exports = {
//   User = User,
//   Ship = Ship,
//   Planet = Planet,
//   Partner = Partner,
//   JediProfile = JediProfile
// }