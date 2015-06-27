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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/question1', {
        templateUrl: 'views/question1.html',
        controller: 'AboutCtrl'
      })
      .when('/question2', {
        templateUrl: 'views/question2.html',
        controller: 'AboutCtrl'

      })
      .when('/question3', {
        templateUrl: 'views/question3.html',
        controller: 'AboutCtrl'

      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'AboutCtrl'

      })
      .otherwise({
        redirectTo: '/'
      });
  });
