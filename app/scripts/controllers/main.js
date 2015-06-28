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



.controller('MyController', ['$scope', 'StorageService',
  function($scope, StorageService) {
    $scope.name = StorageService.getName(); // or setName(name_value)
  }])


.factory('StorageService',[
  function(){

    var name = "";

    var _setName  = function(x){
      this.name = x;
    };

    var _getName = function(){
      return name;
    };

    return {
      setName : _setName,
      getName : _getName
    }



  }]);

