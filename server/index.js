var express = require('express');
var bodyParser = require('body-parser');
var key = require('../config.js');
var http = require('http');
var myBeers = require('../database-mongo');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb(key.key);
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/beers', function(req,res) {
  if(req.body.beer.flag){
  	myBeers.save(req.body.beer)
  } else {
    var beerName = req.body.beer;
    brewdb.search.beers({q:beerName}, function(err, data){
   	res.json(data[0]);
   })
  }
});

app.get('/beers', function (req, res) {
  var usersBrew = req.url.split('=')[1];
  myBeers.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');


// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));