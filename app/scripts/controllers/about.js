'use strict';

/**
 * @ngdoc function
 * @name angularQuizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularQuizApp
 */
angular.module('angularQuizApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
