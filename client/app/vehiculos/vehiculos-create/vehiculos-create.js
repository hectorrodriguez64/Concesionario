'use strict';

angular.module('palmiConApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vehiculos-create', {
        url: '/vehiculos-create',
        template: '<vehiculos-create></vehiculos-create>'
      });
  });
