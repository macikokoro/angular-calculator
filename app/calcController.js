'use strict';

module.exports = function(app) {
  app.controller('calcController', ['$scope','calcService',
  function($scope, calcService) {

  $scope.calculate = function(input) {
    var nums = input.split(' ').map(Number);

    $scope.results = [];

    $scope.results.push({
        name: 'mean',
        value: calcService.mean(nums)
      });

    $scope.results.push({
        name: 'median',
        value: calcService.median(nums)
      });


    };

    $scope.numsEntered = function(input) {
      return input.length > 0;
    };
  }]);
};
