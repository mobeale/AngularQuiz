angular.module('angularQuizApp')

  .factory('Counter',[
    function(){
      var counter = {};
      var _counts = [[]];

      counter.incrementCount = function(questionId, answerId){

        val = _counts[questionId, answerId];
        if (val == null) {
          val = 0;
          console.log("hello")
        }

      _counts[questionId, answerId] = val++;

        console.log("CountService Log: Here it is" + " Question: " + questionId + " Answer: " + answerId + " total: " + val + "\n");
         return val;

      };



      counter.getCounts = function(){
        return "Hello"
      };

      return counter;




    }]);
