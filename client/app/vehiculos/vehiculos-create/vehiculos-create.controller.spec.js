'use strict';

describe('Component: VehiculosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('palmiConApp'));

  var VehiculosCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VehiculosCreateComponent = $componentController('VehiculosCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
