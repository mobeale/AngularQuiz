angular.module('angularQuizApp')


  .controller('QuestionCtrl', ['$scope', 'Questions', 'Counter', '$location', 'QuestionTimer',
    function ($scope, Questions, Counter, $location, QuestionTimer) {

      $scope.data = Questions.get();  //retrieve questions using Question service

      $scope.$on("progressIncrement", function () {
        console.log("This is time:" + QuestionTimer.getCurrentTime());   //console log the current timer (debugging)
        $scope.currentTime = QuestionTimer.getCurrentTime();            // retrieve current time and attach to scope
      });


      $scope.$on("timeUp", function () {
        console.log("Time up");           // console log timeup (debugging)
        $location.path('/timeup')
      });                                // function to redirect to timeup template if time=0

      $scope.currentQuestion = 0;
      $scope.processQuestion = function (questionId, answerId) {
        Counter.incrementCount(questionId, answerId);

        $scope.currentQuestion++;


        if ($scope.currentQuestion >= $scope.data.questions.length) {

          QuestionTimer.stopTimeout();
          QuestionTimer.stopTimer();
          $location.path('/results')

          // loop iterates though current question number and directs to results when last question answered~
          // also stops timeout & timer


        }

      };


    }]);

