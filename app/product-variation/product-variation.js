'use strict';

angular.module('furnitureWaleApp.productVariation', [])
    .controller('productVariationCtrl', ['$rootScope','$routeParams',function($rootScope,$routeParams) {
        var vm  = this;
        console.log($routeParams.productName);
        var key = $routeParams.productName;
        console.log($rootScope.appData.variation[key]);
        createRowObject($rootScope.appData.variation[key])
        function createRowObject(productData){
            if(productData){
                var products = []
                angular.forEach(productData, function(value, key) {
                    if(key%4 === 0){
                        "row"
                    }

                }, products);

                console.log(products);
            }


        }
    }]);