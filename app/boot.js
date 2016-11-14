'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'angularCSS',
  'myApp.home',
  'myApp.purple',
  'myApp.red',
]).
config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
