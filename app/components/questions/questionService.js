'use strict';



 angular.module('angularQuizApp')

.factory('Questions', ['$resource',
  function($resource){
    return $resource('components/questions/data/questions.json', {}, {

    });




  }]);


