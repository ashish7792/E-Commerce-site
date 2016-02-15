'use strict';

angular.module('furnitureWaleApp.landing', [])
    .controller('landingCtrl', ['$rootScope',function($rootScope) {
        var vm  = this;

        vm.categoryList = $rootScope.appData.categoryList;
        vm.banners = $rootScope.appData.banners;
}]);