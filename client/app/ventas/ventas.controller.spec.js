'use strict';

describe('Component: VentasComponent', function () {

  // load the controller's module
  beforeEach(module('palmiConApp'));

  var VentasComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VentasComponent = $componentController('VentasComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
