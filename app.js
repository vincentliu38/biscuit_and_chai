angular.module('app', ['ngMaterial'])

.controller('mainCtrl', function($scope, $http) {

  {
    $http({
      method: 'GET',
      url: 'https://biscuitandchai.com/whiskeyandvodka/api/'
    }).then(function successCallback(response) {
      $scope.cocktails = response.data;
      console.log(response.data)
    }).then(function errorCallback(response) {
      console.log(response);
    })
  }
})