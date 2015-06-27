/**
 * Created by Mathew on 27/06/15.
 */

angular.module('angularQuizApp')
  .controller('QuestionCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

var nameSpace = angular.module("angularQuizApp", []);

nameSpace.controller("QuestionFunction", function QuestionFunction($scope)

  {
    $scope.questionVariable = [
      {
        "name" 	 : "Acoustic Guitar",
        "description": "Acoustic, electro-acoustic and classical guitars, from leading brands.",
        "image"	 :  "Acoustic"
      },
      {
        "name" 	: "Electric Guitar",
        "description": "Ever-popular solid-body guitars, to hollow-body guitars and archtops.",
        "image"	:  "Electric"
      },
      {
        "name" 	: "Bass Guitar",
        "description": "Classic Fender Bass, Precision and Jazz basses, to Gibson Thunderbirds.",
        "image"	:  "Bass"
      }
    ]
  }
);
