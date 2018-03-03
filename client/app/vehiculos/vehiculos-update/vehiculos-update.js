'use strict';

angular.module('palmiConApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vehiculos-update', {
        url: '/vehiculos-update',
        template: '<vehiculos-update></vehiculos-update>'
      });
  });
