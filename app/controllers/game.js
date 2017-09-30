angular.module('app.controllers.game', [])
  .controller('GameCtrl', function($scope, Items) {
    $scope.getRandomItemAsynch = function() {
      // Used for asynchronous updates
      Items.getRandomItem(function(item) {
        $scope.$evalAsync(function() {
          $scope.item = item;
        });
      });
    };

    $scope.getRandomItemAsynch();

    $scope.guessPrice = function (guess) {
      console.log(guess)
      guess = parseFloat(guess);
      if (isNaN(guess)) {
        alert("Invalid guess entered");
        return;
      }
      alert("You guessed: "  + guess.toString() + "\nActual price: " + $scope.item.price.toString());
    }
  }
);
