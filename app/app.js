'use strict';

// Declare app level module which depends on views, and components

angular.module('furnitureWaleApp', ['ngRoute', 'furnitureWaleApp.landing'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/landing', {
          templateUrl: 'landing-page/landing.html',
          controller: 'LandingCtrl'
        })
        .when('/beds', {
            templateUrl: 'product-variation/product-variation.html',
            controller: 'LandingCtrl'
        })
        .when('/detailView', {
            templateUrl: 'product-details/product-details.html',
            controller: 'LandingCtrl'
        })

        .otherwise({redirectTo: '/landing'});
       }
    ]);

