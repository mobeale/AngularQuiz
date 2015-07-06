angular.module('angularQuizApp')

  .factory('Counter', [ //new service to total scores
    function () {
      var counter = {};
      var _counts = [[], [], [], [], [], [], [], []];  // Multi-dimension array for initialization - sometimes breaks with less internal arrays (shouldn't hard code, write loop)

      counter.incrementCount = function (questionId, answerId) {

        var val = _counts[questionId] [answerId];
        if (val == null) {
          val = 0;
        }

        val++;
        _counts [questionId] [answerId] = val;

        console.log("CountService Log: " + "Question: " + questionId + " Answer: " + answerId + " total: " + val + "\n"); //console.log identifies current question, answer and total (debugging)
        return val;

      };

      counter.getCounts = function () {  // New function called getCounts to return _counts array (Where results are stored) as a string
        return _counts;
      };

      return counter;


    }]);



