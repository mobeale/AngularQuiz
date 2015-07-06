/**
 * Created by Mathew on 05/07/15.
 */
'use strict';



angular.module('angularQuizApp')

  .factory('QuestionTimer', ['$interval','$timeout', '$rootScope',
    function($interval, $timeout, $rootScope){
      var _currentPercentage;
      var _currentTime;
      var _intervalPromise;
      var _timeoutPromise;
      var _getCurrentPercentage = function(){
        return _currentPercentage
      };

      // set blank variables & set return function to get variable

      var _getCurrentTime = function(){
        return _currentTime;
      };

      // set return function to get variable

      var _startTimer = function(){   // define start timer function
         _currentPercentage = 0;     // set current percentage to 0
        _currentTime = 30;          // set current time to 30
        _stopTimer();              // call stop time function
      console.log("Timer is go");
        _intervalPromise = $interval(function(){

            _currentPercentage = _currentPercentage + 3.4; // percent increase per increment to reflect a correct percentage (1 sec = around 3.4% of progress bar when max is 30)
            _currentTime = _currentTime - 1;  // decrement current time by x amount (currently 1)

            $rootScope.$broadcast("progressIncrement");



          }

          ,1000); // increment in which timer increases currently per 1 sec (1000ms = 1 sec)

        _timeoutPromise = $timeout(function(){

            $rootScope.$broadcast("timeUp")
          }

          ,30000);  // Figure for timer total currently 30sec (10k ms = 10 sec)

      };

      var _stopTimer = function(){
        $interval.cancel(_intervalPromise)
      };

      var _stopTimeout= function(){
        $timeout.cancel(_timeoutPromise)
      };

      // stop the timer and timeout  - using reference to passed function







          // set to friendly variables (keep private within factory)

      return {
        startTimer : _startTimer,
        getCurrentPercentage : _getCurrentPercentage,
        getCurrentTime : _getCurrentTime,
        stopTimer : _stopTimer,
        stopTimeout : _stopTimeout
      };





    }]);


