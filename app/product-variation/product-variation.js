'use strict';

angular.module('furnitureWaleApp.productVariation', [])
    .controller('productVariationCtrl', ['$rootScope','$routeParams',function($rootScope,$routeParams) {
        var vm  = this,
            numberOfColumns = 4;
        vm.key = $routeParams.productName;
        createRowObject($rootScope.appData.variation[vm.key])
        function createRowObject(productData){
            if(productData){
                vm.products = [];
                var row = []
                angular.forEach(productData, function(value, key) {
                    row.push(value);
                   if((key+1)% numberOfColumns === 0){
                       this.push(row);
                       row = [];
                   }
                }, vm.products);
            }
        }
    }]);