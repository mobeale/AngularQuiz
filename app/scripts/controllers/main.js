'use strict';

/**
 * @ngdoc function
 * @name angularQuizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularQuizApp
 */
angular.module('angularQuizApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
