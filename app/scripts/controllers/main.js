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
  })

  .factory('StorageService',[
    function(){

      var _name = "";

      var _setName  = function(name){
        _name = name;
        return "Let's start the quiz!";
      };

      var _getName = function(){
        return _name;
      };

      return {
        setName : _setName,
        getName : _getName
      };

    }])

  .controller('MainCtrl', ['$scope','$route', '$location',"StorageService",
    function($scope, $route, $location, StorageService) {

      $scope.name = StorageService.getName();

      $scope.valueReturned = "";

      $scope.saveMyName = function(name){
        var result = StorageService.setName(name);
        $scope.valueReturned =angular.copy(result);

        //Update name to the view
        $scope.name = StorageService.getName();
      };

    }])






