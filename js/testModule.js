/**
 * Created by huxiangtao on 2016/3/11.
 */

define(
    'testModule',
    [
        'angular',
        'datePickerModule'
    ],
    function(ng){
        'use strict'
        return ng.module('testModule',['datePickerModule']).controller('testCtrl',function($scope) {
            $scope.$watch($scope.date,function() {
                console.log($scope.date);
                console.log('$scope.date');
            });

        })
    }
);