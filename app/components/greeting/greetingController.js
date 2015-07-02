'use strict';

/**
 * @ngdoc function
 * @name angularQuizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularQuizApp
 */


angular.module('angularQuizApp')



  .controller('greetCtrl', ['$scope','$route', '$location',"StorageService",
    function($scope, $route, $location, StorageService) {

      $scope.name = StorageService.getName();

      $scope.valueReturned = "";

      $scope.saveMyName = function(name){
        var result = StorageService.setName(name);
        $scope.valueReturned =angular.copy(result);

        //Update name to the view
        $scope.name = StorageService.getName();
      };

    }]);
