'use strict';

describe('Controller: QuestionctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularQuizApp'));

  var QuestionctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestionctrlCtrl = $controller('QuestionctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
