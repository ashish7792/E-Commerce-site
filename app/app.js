'use strict';

// Declare app level module which depends on views, and components

var app = angular.module('furnitureWaleApp', [
    'ngRoute',
    'furnitureWaleApp.landing',
    'furnitureWaleApp.dataService',
    'furnitureWaleApp.productVariation'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/landing', {
          templateUrl: 'landing-page/landing.html',
          controller: 'landingCtrl',
          controllerAs: 'vm',
        })
        .when('/product/:productName', {
            templateUrl: 'product-variation/product-variation.html',
            controller: 'productVariationCtrl',
            controllerAs: 'vm',
        })
        .when('/detailView', {
            templateUrl: 'product-details/product-details.html'
        })
        .otherwise({redirectTo: '/landing'});
       }
    ]).run(["$rootScope","dataService",function($rootScope,dataService){
        dataService.getAppData(function(response) {
            $rootScope.appData = response.data;
        });
    }]);

