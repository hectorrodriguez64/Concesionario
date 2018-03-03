'use strict';

describe('Component: VehiculosUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('palmiConApp'));

  var VehiculosUpdateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VehiculosUpdateComponent = $componentController('VehiculosUpdateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
