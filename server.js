var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/restaurantReviews', function(req, res) {
  console.log('I recieved a get request');
  restaurant1 = {
    name: "Yamo",
    image: "None submitted",
    review: "Cheap restaurant, but gave me a stomach ache"
  }

  restaurant2 = {
    name: "Curry up now",
    image: "None submitted",
    review: "Great indian food, but a tad expensive"
  }

  restaurant3 = {
    name: "taqueria",
    image: "None submitted",
    review: "Cheap and great"
  }

  var restaurantReviews = [restaurant1, restaurant2, restaurant3];
  res.json(restaurantReviews);
});

app.listen(3000);
console.log("server running on port 3000");
