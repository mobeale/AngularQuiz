
angular.module('angularQuizApp')

.factory('StorageService',[
  function(){

    var _name = "Stranger";

    var _setName  = function(name){
      _name = name;
      return "Let's start the quiz!";
    };

    var _getName = function(){
      return _name;
    };

    return {
      setName : _setName,
      getName : _getName
    };




  }]);
