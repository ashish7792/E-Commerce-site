'use strict';

angular.module('furnitureWaleApp.landing', [])
.controller('landingCtrl', [function() {
    this.categoryList = {
        "row1":[
            {
                "name" : "Beds",
                "imageUrl" : "bed_0.jpg"
            },
            {
                "name" : "Revolving Tower",
                "imageUrl" : "revolvingtower.jpg"
            },
            {
                "name" : "Home Set 1",
                "imageUrl" : "homeset_1.jpg"
            }
        ],
        "row2" : [
            {
                "name" : "Home Set 2",
                "imageUrl" : "homeset_4.jpg"
            },
            {
                "name" : "Sofa set",
                "imageUrl" : "sofa_2.gif"
            },
            {
                "name" : "Home Set 3",
                "imageUrl" : "homeset_2.jpg"
            }
        ],
        "row3" : [
            {
                "name" : "Sofa set",
                "imageUrl" : "sofa_3.jpg"
            },
            {
                "name" : "Chair",
                "imageUrl" : "chair_1.jpg"
            },
            {
                "name" : "Home Set 4",
                "imageUrl" : "homeset_3.jpg"
            }
        ]}
    this.bannerList = [
        {
            "name" : "banner 1",
            "imageUrl" : "banner1.jpg"
        },
        {
            "name" : "banner 2",
            "imageUrl" : "banner3.jpg"
        },
        {
            "name" : "banner 3",
            "imageUrl" : "banner3.jpg"
        },
        {
            "name" : "banner 4",
            "imageUrl" : "banner4.jpg"
        }
    ]

}]);