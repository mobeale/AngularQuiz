'use strict';



 angular.module('angularQuizApp')

.factory('Questions', ['$resource',
  function($resource){
    return $resource('components/questions/data/questions.json', {}, {    // retrieving the questions from JSON file

    });




  }]);


