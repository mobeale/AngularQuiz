


angular.module('angularQuizApp')



  .controller('QuestionCtrl', ['$scope','Questions', 'Counter', '$location','QuestionTimer',
    function($scope, Questions, Counter, $location, QuestionTimer) {

      $scope.data = Questions.get();

      $scope.$on("progressIncrement", function(){
        console.log("This is time:" + QuestionTimer.getCurrentTime());
        $scope.currentTime = QuestionTimer.getCurrentTime();
      });


      $scope.$on("timeUp", function(){
        console.log("Time up");
        $location.path('/timeup')

      });

      $scope.currentQuestion = 0;
      $scope.processQuestion = function(questionId, answerId){
        //console.log("QuestionController Log: Here it is" + " Question " + questionId + " Answer " + answerId + "\n");
      Counter.incrementCount(questionId, answerId);

        $scope.currentQuestion++;


        if ($scope.currentQuestion >= $scope.data.questions.length) {

          $location.path('/results')

        }

      };





    }]);

