// function AppCtrl() {
//   console.log('Hello World from controller');
// };


var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

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

    restaurant2 = {
      name: "taqueria",
      image: "None submitted",
      review: "Cheap and great"
    }

    var restaurantReviews = [restaurant1, restaurant2, restaurant3];
    $scope.restaurantReviews = restaurantReviews;
}]);
