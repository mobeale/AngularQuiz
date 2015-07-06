angular.module('angularQuizApp')

  .factory('StorageService', [ // new service to store name
    function () {

      var _name = "Stranger";                                     // set initial name to stranger

      var _setName = function (name) {                           // function to set name
        _name = name;
        return "Awesome, thanks! Now let's start the quiz!";  // Don't actually need since splitting submit/start button
      };

      var _getName = function () {                            // function to return name
        return _name;
      };

      return {
        setName: _setName,       // set to friendly variable
        getName: _getName        // set to friendly variable
      };


    }]);
