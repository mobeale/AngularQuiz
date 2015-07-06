'use strict';


angular.module('angularQuizApp')
  .controller('ResultsCtrl', ['$scope', 'Questions', 'Counter',
    function ($scope, Questions, Counter) {

      $scope.data = Questions.get();         // retrieve questions
      $scope.counts = Counter.getCounts();   // found in countService

    }]);


