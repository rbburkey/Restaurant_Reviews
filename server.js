var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('restaurantReviews', ['restaurantReviews']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
// this enables the server to parse the body of the input in a digestable form on line 33
app.use(bodyParser.json());

app.get('/restaurantReviews', function(req, res) {
  console.log('I recieved a get request');
  db.restaurantReviews.find(function(err, docs) {
    console.log('docs');
    res.json(docs);
  });
});

// app.post listens to the post request from the controller, server needs to know how to parse the body of the input....
// this code inputs data into the database as well as sends the data back to the controller
app.post('/restaurantReviews', function(req, res){
  console.log(req.body);
  db.restaurantReviews.insert(req.body, function(err,doc) {
    res.json(doc);
  });
});

app.delete('/restaurantReviews/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  db.restaurantReviews.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
  });
});

app.get('/restaurantReviews/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  db.restaurantReviews.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
  });
});

app.put('/restaurantReviews/:id', function(req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.restaurantReviews.findAndModify({query: {_id: mongojs.ObjectId(id)},
update: {$set: {name: req.body.name, image: req.body.image, review: req.body.review}},
new: true}, function (err, doc) {
  res.json(doc);

});
});

app.listen(3000);
console.log("server running on port 3000");
