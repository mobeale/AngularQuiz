'use strict';

describe('Service: xyz', function () {

  // load the service's module
  beforeEach(module('angularQuizApp'));

  // instantiate service
  var xyz;
  beforeEach(inject(function (_xyz_) {
    xyz = _xyz_;
  }));

  it('should do something', function () {
    expect(!!xyz).toBe(true);
  });

});
