var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
  console.log("Hello World from controller");

var refresh = function(){ //this refresh function performs like an ajax function it autopopulates the page with the new data
  $http.get('/restaurantReviews').success(function (response) {
    console.log('I got the data I requested');
    $scope.restaurantReviews = response;
    $scope.restaurant = "";
  });
};
refresh();

  //addRestaurant refers to the add restaurant button in the index html (the button)
  $scope.addRestaurant = function() {
    console.log($scope.restaurant);
    // restaurantReviews is our route and $scope.reataurant is the data we are sending to the server
    // the server needs to now listen for this request     app.post
    $http.post('/restaurantReviews', $scope.restaurant).success(function(response) {
      console.log(response);
      refresh();
    });
  };

  $scope.remove = function(id) {
    console.log(id);
    $http.delete('/restaurantReviews/' + id).success(function(response) {
      refresh();
    });
  };

  $scope.edit = function(id) {
    console.log(id);
    $http.get('/restaurantReviews/' + id).success(function(response) {
      $scope.restaurant = response;
    });

  };

}]);
