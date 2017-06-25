angular.module('app', ['ngMaterial'])

.controller('mainCtrl', function($scope, $http, $mdDialog) {

  {
    $http({
      method: 'GET',
      url: 'https://biscuitandchai.com/whiskeyandvodka/api/'
    }).then(function successCallback(response) {
      $scope.drinktypes = [];
      $scope.cocktails = response.data;
      $scope.cocktails.forEach(drink => {
        drink.Cost = drink.Cost.replace(/[^\d.-]/g, '');
        if ($scope.drinktypes.indexOf(drink.DrinkType) === -1) $scope.drinktypes.push(drink.DrinkType)
      })
      console.log(response.data)
    }).then(function errorCallback(response) {
      console.log(response);
    })
  }

  $scope.items = ['$-$$', '$$-$'];
  $scope.selectedItem;
  $scope.getSelectedText = function() {
    if ($scope.selectedItem !== undefined) {
      return $scope.selectedItem;
    } else {
      return "Sort By:";
    }
  };

  $scope.sort = (sortBy) => {
    if (sortBy === '$-$$') {
      $scope.cocktails = $scope.cocktails.sort((a, b) => {
        return a.Cost - b.Cost;
      })
    } else {
      $scope.cocktails = $scope.cocktails.sort((a, b) => {
        return b.Cost - a.Cost;
      })
    }
  }

  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showIngredients = (ev, drink) => {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Ingredients')
        .textContent(drink.Ingredients)
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
  
    $scope.showRecipe = (ev, drink) => {
    console.log(drink)
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Recipie')
        .textContent(drink.Recipe)
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

})