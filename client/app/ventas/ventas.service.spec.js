'use strict';

describe('Service: ventas', function () {

  // load the service's module
  beforeEach(module('palmiConApp'));

  // instantiate service
  var ventas;
  beforeEach(inject(function (_ventas_) {
    ventas = _ventas_;
  }));

  it('should do something', function () {
    expect(!!ventas).to.be.true;
  });

});
