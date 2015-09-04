'use strict';

/**
 * @ngdoc overview
 * @name angularQuizApp
 * @description
 * # angularQuizApp
 *
 * Main module of the application.
 */


angular
  .module('angularQuizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'progressModule',
    'angular-tour'

  ])


  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/greeting/main.html',
        controller: 'greetCtrl'
      })
      .when('/about', {
        templateUrl: 'shared/about.html',
        controller: ''
      })
      .when('/question/', {
        templateUrl: 'components/questions/views/question.html',
        controller: 'QuestionCtrl'

      })
      .when('/results', {
        templateUrl: 'components/questions/views/results.html',
        controller: 'ResultsCtrl'

      })

      .when('/timeup', {
        templateUrl: 'components/timer/timeUp.html'

      })
      .otherwise({
        redirectTo: '/'
      });


  });
