var movieApp = angular.module('movieApp', []);
// create the controller and inject Angular's $scope
movieApp.controller('mainController', function($scope) {
  // create a message to display in our view
  
  $scope.message = 'popular';
});


