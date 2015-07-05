'use strict';







   angular.module('angularQuizApp')
     .controller('ResultsCtrl', ['$scope', 'Questions', 'Counter',
       function($scope, Questions, Counter) {

        $scope.data = Questions.get();
       $scope.counts = Counter.getCounts(); // found in countService

         console.log("Counts " + $scope.counts)




       }]);


