'use strict';

describe('Service: vehiculos', function () {

  // load the service's module
  beforeEach(module('palmiConApp'));

  // instantiate service
  var vehiculos;
  beforeEach(inject(function (_vehiculos_) {
    vehiculos = _vehiculos_;
  }));

  it('should do something', function () {
    expect(!!vehiculos).to.be.true;
  });

});
