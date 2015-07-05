'use strict';

/**
 * @ngdoc function
 * @name angularQuizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularQuizApp
 */


angular.module('angularQuizApp')



  .controller('greetCtrl', ['$scope','$route', '$location',"StorageService", 'QuestionTimer',
    function($scope, $route, $location, StorageService, QuestionTimer) {

      $scope.name = StorageService.getName();

      $scope.valueReturned = "";

        //Update name to the view
        $scope.name = StorageService.getName();


      $scope.startQuiz = function(){
        console.log("Time is started");
        var result = StorageService.setName($scope.myName);
        $scope.valueReturned = angular.copy(result);
        QuestionTimer.startTimer();
        return true;
      }

    }]);
