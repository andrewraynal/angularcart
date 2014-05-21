'use strict';

angular
  .module('angularcartApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ProductCtrl'
      })
      .otherwise({
        redirectTo: 'http://theironyard.com/'
      });
  });
