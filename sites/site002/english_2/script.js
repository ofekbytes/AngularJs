angular.module('myApp', [])
.controller('myController', function($scope, $http) {
  $http.get('data.json').then(function(response) {
    $scope.data = response.data;
  }, function(error) {
    console.error('Failed to load JSON file:', error);
  });
});
