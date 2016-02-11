'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute', 'myApp.view1'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/landing', {
          templateUrl: 'landing-page/landing.html',
          controller: 'LandingCtrl'
        }).
        otherwise({redirectTo: '/landing'});
       }
    ]);