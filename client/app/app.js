'use strict';

angular.module('palmiConApp', [
  'palmiConApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])

  .constant('API',"http://localhost:8080/concesionarioAppBackend")
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
