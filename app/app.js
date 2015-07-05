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
    'ngTouch'

  ])



  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'shared/main.html',
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
        templateUrl: 'shared/timeUp.html'

      })
      .otherwise({
        redirectTo: '/'
      });







  });
