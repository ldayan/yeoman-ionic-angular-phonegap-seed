'use strict';

describe('Service: Countries', function () {

  // load the service's module
  beforeEach(module('appNameApp'));

  // instantiate service
  var Countries;
  beforeEach(inject(function(_Countries_) {
    Countries = _Countries_;
  }));

  it('should do something', function () {
    expect(!!Countries).toBe(true);
  });

});
