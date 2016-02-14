'use strict';

// Declare app level module which depends on views, and components

angular.module('furnitureWaleApp', ['ngRoute', 'furnitureWaleApp.landing','furnitureWaleApp.dataService'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/landing', {
          templateUrl: 'landing-page/landing.html',
          controller: 'landingCtrl',
          controllerAs: 'vm',
        })
        .when('/beds', {
            templateUrl: 'product-variation/product-variation.html'
        })
        .when('/detailView', {
            templateUrl: 'product-details/product-details.html'
        })
        .otherwise({redirectTo: '/landing'});
       }
    ]);

