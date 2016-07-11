var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('restaurantReviews', ['restaurantReviews']);

app.use(express.static(__dirname + '/public'));

app.get('/restaurantReviews', function(req, res) {
  console.log('I recieved a get request');

  db.restaurantReviews.find(function(err, docs) {
    console.log('docs');
    res.json(docs);
  });
});

app.listen(3000);
console.log("server running on port 3000");
