var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var beerSchema = mongoose.Schema({
  name: String,
  description: String
});

var Beer = mongoose.model('Beer', beerSchema);

var selectAll = function(callback) {
  Beer.find({}, function(err, beers) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, beers);
    }
  });
};

// var coors = new Beer({
//   name:'Coors',
//   description:'Mountains are blue'
// })
// coors.save(function(err){
//   if(err){
//     console.log(err)
//   }
// })
module.exports.selectAll = selectAll;