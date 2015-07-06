
var progressModule = angular.module('progressModule', []);  // Creating under new module for re-usability

progressModule.controller('ProgressController',['$scope','$interval','QuestionTimer', function($scope, $interval, QuestionTimer){

    $scope.$on("progressIncrement", function(){

      $scope.currentPercentage = QuestionTimer.getCurrentPercentage();
    })

  }]);


  progressModule.directive('progressComponent', function () {    // directive for templating progress bar across views
    return {
      templateUrl: 'components/progress/progress.html'     // the html template of progress bar

    };

  });
