'use strict';

describe('Component: VentasListComponent', function () {

  // load the controller's module
  beforeEach(module('palmiConApp'));

  var VentasListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VentasListComponent = $componentController('VentasListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
