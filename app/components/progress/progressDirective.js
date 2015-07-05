


angular.module('angularQuizApp')
  .controller('ProgressController',['$scope','$interval','QuestionTimer', function($scope, $interval, QuestionTimer){

    $scope.$on("progressIncrement", function(){

      $scope.currentPercentage = QuestionTimer.getCurrentPercentage();
    })

  }])


  .directive('progressComponent', function () {
    return {
      templateUrl: 'components/progress/progress.html'

    };
  });
