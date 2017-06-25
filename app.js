angular.module('app', ['ngMaterial'])

  .controller('mainCtrl', ($scope, $http, $mdDialog) => {
    {
      $http({
        method: 'GET',
        url: 'https://biscuitandchai.com/whiskeyandvodka/api/',
      }).then((response) => {
        $scope.cocktails = response.data;
        $scope.cocktails.forEach((drink) => {
          drink.Cost = drink.Cost.replace(/[^\d.-]/g, '');
        });
        $scope.cocktails[0].Image = 'http://cdn.liquor.com/wp-content/uploads/2016/10/13095839/The-Squash-Cocktail-That-Beats-the-Pumpkin-Spice-Latte-at-Its-Own-Game-720x720-article.jpg';
        $scope.cocktails[1].Image = 'http://cdn.liquor.com/wp-content/uploads/2015/02/recipe-taylored-black-russian.jpg';
        $scope.cocktails[2].Image = 'http://cdn.liquor.com/wp-content/uploads/2017/05/05124349/Spicy_720-720.jpg';
        $scope.cocktails[3].Image = 'http://cdn.liquor.com/wp-content/uploads/2016/10/04133803/dark-n-stormy-720sq.jpg';
        $scope.cocktails[4].Image = 'http://cdn.liquor.com/wp-content/uploads/2016/07/23122415/mimosa-recipe-720-square.jpg';
        $scope.cocktails[5].Image = 'http://cdn.liquor.com/wp-content/uploads/2016/09/14133453/Brown-Bag-Daiquiri-720x720-recipe.jpg';
        $scope.cocktails[6].Image = 'http://cdn.liquor.com/wp-content/uploads/2016/05/11145432/jason_seele_classic.png';
        $scope.cocktails[7].Image = 'http://cdn.liquor.com/wp-content/uploads/2016/08/10113036/gin-and-tonic-720x720-article.jpg';
        $scope.cocktails[8].Image = 'http://cdn.liquor.com/wp-content/uploads/2011/01/11160826/cosmopolitain2.jpg';
        $scope.cocktails[9].Image = 'http://cdn.liquor.com/wp-content/uploads/2017/03/07152907/long-island-iced-tea-720x720-recipe.jpg';
      }).then((response) => {
        console.log(response);
      });
    }

    $scope.items = ['$-$$', '$$-$'];
    $scope.selectedItem;
    $scope.getSelectedText = () => {
      if ($scope.selectedItem !== undefined) {
        return $scope.selectedItem;
      }
      return 'Sort By:';
    };

    $scope.sort = (sortBy) => {
      if (sortBy === '$-$$') {
        $scope.cocktails = $scope.cocktails.sort((a, b) => a.Cost - b.Cost);
      } else {
        $scope.cocktails = $scope.cocktails.sort((a, b) => b.Cost - a.Cost);
      }
    };

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
          .targetEvent(ev),
      );
    };

    $scope.showRecipe = (ev, drink) => {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Recipie')
          .textContent(drink.Recipe)
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev),
      );
    };

    function DialogController($scope, $mdDialog) {
      $scope.hide = () => {
        $mdDialog.hide();
      };

      $scope.cancel = () => {
        $mdDialog.cancel();
      };
    }
  });
