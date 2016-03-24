/**
 * Created by huxiangtao on 2016/3/11.
 */

define(
    'testModule',
    [
        'angular',
        'moment',
        'jquery',
        'datetimepicker'
    ],
    function(ng){
        'use strict'
        return ng.module('testModule',['ui.bootstrap.datetimepicker']).controller('testCtrl',function($scope) {
           /* $scope.$watch($scope.date,function() {
                console.log($scope.date);
                console.log('$scope.date');
            });*/

        })
    }
);