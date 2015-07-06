'use strict';

/**
 * @ngdoc function
 * @name angularQuizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularQuizApp
 */


angular.module('angularQuizApp')


  .controller('greetCtrl', ['$scope', '$route', '$location', "StorageService", 'QuestionTimer', //new controller for greeting & initiating timer/quiz
    function ($scope, $route, $location, StorageService, QuestionTimer) {

      $scope.name = StorageService.getName();

      $scope.valueReturned = "";


      $scope.name = StorageService.getName();    //Update name to the view


      $scope.startQuiz = function () {                         // startQuiz function attached to scope
        console.log("Time is started");                       // console.log for debugging
        var result = StorageService.setName($scope.myName);  // attach name to scope
        $scope.valueReturned = angular.copy(result);        // copy value returned
        QuestionTimer.startTimer();                        // execute timer function
        $location.path('/question');                      // initiate questions

        return true;
      }

    }]);
