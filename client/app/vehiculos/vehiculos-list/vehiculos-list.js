'use strict';

angular.module('palmiConApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vehiculos-list', {
        url: '/vehiculos-list',
        template: '<vehiculos-list></vehiculos-list>'
      });
  });
