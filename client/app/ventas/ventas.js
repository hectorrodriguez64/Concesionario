'use strict';

angular.module('palmiConApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ventas', {
        url: '/ventas',
        template: '<ventas></ventas>'
      });
  });
