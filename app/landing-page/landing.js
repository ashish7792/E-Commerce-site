'use strict';

angular.module('furnitureWaleApp.landing', [])
    .controller('landingCtrl', ['dataService',function(dataService) {

        var vm  = this;

        dataService.getAppData(function(response) {
            if(response.data){
                vm.categoryList = response.data.categoryList;
                vm.banners = response.data.banners;
            }
        });

}]);