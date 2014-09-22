'use strict';

module.exports = function (app) {
  app.service('calcService', function() {
    var meanMedianMode = require('../lib/meanMedianMode');
    this.mean = meanMedianMode.mean;
    this.median = meanMedianMode.median;
  
  });
};
