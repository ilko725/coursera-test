(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  assignment1.$inject = ['$scope', '$filter'];
  function assignment1($scope, $filter) {
    $scope.name = "";
    $scope.check = function checkIfTooMuch() {

    };
    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  };

  /*.controller('MyFirstController', function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;
    $scope.sayHello = function () {
      return "Hello Coursera";
    }
    $scope.displayNumeric = function () {
      var totalNameValue = calculateNumericForString($scope.name); //get the total value
      $scope.totalValue = totalNameValue;
    };


    function calculateNumericForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }

      return totalStringValue;
    };
  });*/

})();
