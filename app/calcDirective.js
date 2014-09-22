'use strict';

module.exports = function(app) {
  app.directive('calcOutput', function() {
    return {
      restrict: 'E',
      templateUrl: 'results.html'
    };
  });
};
