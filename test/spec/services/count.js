'use strict';

describe('Service: Count', function () {

  // load the service's module
  beforeEach(module('angularQuizApp'));

  // instantiate service
  var Count;
  beforeEach(inject(function (_Count_) {
    Count = _Count_;
  }));

  it('should do something', function () {
    expect(!!Count).toBe(true);
  });

});
