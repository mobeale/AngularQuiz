angular.module('angularQuizApp')

  .factory('Counter',[
    function(){
      var counter = {};
      var _counts = [[],[],[],[],[],[],[],[]];

      counter.incrementCount = function(questionId, answerId){

        var val = _counts[questionId] [answerId];
        if (val == null) {
          val = 0;
          console.log("Question log")
        }
        val++;
        _counts [questionId] [answerId] = val;

        console.log("CountService Log:" + "Question: " + questionId + " Answer: " + answerId + " total: " + val + "\n");
         return val;

      };

      counter.getCounts = function(){  // New function called getCounts to return _counts array (Where results are stored) as a string
        return _counts;
      };

      return counter;


  }]);



