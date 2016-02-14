'use strict';

angular.module('furnitureWaleApp.dataService', [])
.factory("dataService",["$http",dataService]);

function dataService ($http){
    return {
        getAppData: function(successCallback,errorCallback){
            $http.get('app.json').then(successCallback,errorCallback);
        }
    };
}