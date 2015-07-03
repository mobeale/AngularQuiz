


angular.module('angularQuizApp')



  .controller('QuestionCtrl', ['$scope','Questions', 'Counter', '$location',
    function($scope, Questions, Counter, $location) {

      $scope.data = Questions.get();

      $scope.currentQuestion = 0;
      $scope.processQuestion = function(questionId, answerId){
        console.log("QuestionController Log: Here it is" + " Question " + questionId + " Answer " + answerId + "\n");
      Counter.incrementCount(questionId, answerId);

        $scope.currentQuestion++;

        if ($scope.currentQuestion >= $scope.data.questions.length) {

          $location.path('/results')

        }

      };





    }]);

