/**
 * Created by Mathew on 05/07/15.
 */
'use strict';



angular.module('angularQuizApp')

  .factory('QuestionTimer', ['$interval','$timeout', '$rootScope',
    function($interval, $timeout, $rootScope){
      var _currentPercentage = 0;
      var _currentTime = 30;
      var _getCurrentPercentage = function(){
        return _currentPercentage
      };

      var _getCurrentTime = function(){
        return _currentTime;
      };

      var _startTimer = function(){
        _currentPercentage = 0;
        _currentTime = 30;
      console.log("Timer is go");
        $interval(function(){

            _currentPercentage = _currentPercentage + 3.4;
            _currentTime = _currentTime - 1;

            $rootScope.$broadcast("progressIncrement");



          }

          ,1000);

        $timeout(function(){

            $rootScope.$broadcast("timeUp")
          }

          ,30000);

      };


      return {
        startTimer : _startTimer,
        getCurrentPercentage : _getCurrentPercentage,
        getCurrentTime : _getCurrentTime
      };



    }]);


