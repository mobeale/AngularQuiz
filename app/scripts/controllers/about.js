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

    $scope.question = {
      q1: 'What is your favorite fruit?',
      q2: 'What is your favorite colour',
      q3: 'How did you find this page?'
    };

    $scope.answer = {
      q1a: 'Oranges',
      q1b: 'Bananas',
      q2a: 'Red',
      q2b: 'Blue',
      q3a: 'Google',
      q3b: 'Facebook'
    }


  });




