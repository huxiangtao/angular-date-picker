/**
 * Created by huxiangtao on 2016/3/8.
 */

define(
    'datePickerModule',
    [
        'angular'
    ],
    function(ng) {
        "use strict";
        return ng.module('datePickerModule',[]).directive('datepicker',function() {
                    return {
                        restrict:'E',
                        template:"<div>" +
                                "<p>{{item}}</p>" +
                                "</div>",
                        replace:true,
                        link:function(scope) {
                            scope.item = "hello world!"
                        }
                    }
                });


    }
);