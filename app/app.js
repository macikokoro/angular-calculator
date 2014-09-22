'use strict';

require('angular/angular');

var calculator = angular.module('calculator', []);

//Mean median mode operations
require('./calcService')(calculator);

//Directive for results
require('./calcDirective')(calculator);

//Controller
require('./calcController')(calculator);
