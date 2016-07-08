// function AppCtrl() {
//   console.log('Hello World from controller');
// };


var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get('/restaurantReviews').success(function(response) {
      console.log('I got the data I requested');
      $scope.restaurantReviews = response;
    });



}]);
