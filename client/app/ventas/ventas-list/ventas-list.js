'use strict';

angular.module('palmiConApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ventas-list', {
        url: '/ventas-list',
        template: '<ventas-list></ventas-list>'
      });
  });
