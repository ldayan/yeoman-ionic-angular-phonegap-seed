'use strict';

describe('Service: backend', function () {

  // load the service's module
  beforeEach(module('appNameApp'));

  // instantiate service
  var backend;
  beforeEach(inject(function(_backend_) {
    backend = _backend_;
  }));

  it('should do something', function () {
    expect(!!backend).toBe(true);
  });

});
