'use strict'

angular.module("furnitureWaleApp.productDetails",[])
.controller('productDetailsCtrl',['$rootScope','$routeParams',function($rootScope,$routeParams){
    var vm = this;
        vm.itemId = $routeParams.itemId;
        vm.item = $routeParams.item;
        vm.itemDetails = $rootScope.appData.variation[vm.item][vm.itemId -1];
}]);