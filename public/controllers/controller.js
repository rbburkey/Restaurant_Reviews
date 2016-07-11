var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("Hello World from controller");

// function AppCtrl($scope, $http) {
//   console.log("Hello World from Controller");

    $http.get('/restaurantReviews').success(function (response) {
      console.log('I got the data I requested');
      $scope.restaurantReviews = response;
    });

}]);
