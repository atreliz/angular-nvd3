  /*Made by AlexT */
  /*Using http://krispo.github.io/angular-nvd3/#/quickstart*/
  
'use strict';

angular.module('POCApp', ['ngRoute','nvd3'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/example1.html',
        controller: 'example1Ctrl'
      })
      .when('/example2', {
        templateUrl: 'views/example2.html',
        controller: 'example2Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



