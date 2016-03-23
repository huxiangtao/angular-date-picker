/**
 * Created by huxiangtao on 2016/3/14.
 */

define('angualrTestModule',
    [
        'angular'
    ],function(ng) {
        'use strict';
        return ng.module('angualrTestModule',[])
            .controller('angualrTestCtrl',function($scope) {
                var object1 = {
                    name:'huxt',
                    age: 18
                }

                var object2 = {
                    name:'elliots',
                    age:28,
                    email:'elliot130@163.com'
                }

                var result = ng.extend(object2,object1);
                var result2 = ng.merge(object2,object1);
                console.log(result);
                console.log(result2);
                console.log(ng.identity);

        });

});