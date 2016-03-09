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
                        template:'<div class="datetimepicker table-responsive">' +
                                    '<table class="table table-striped">' +
                                        '<thead>' +
                                            '<tr>' +
                                                '<th class="left"></th>' +
                                                '<th class="switch"></th>' +
                                                '<th class="right"></th>' +
                                            '</tr>' +
                                            '<tr>' +
                                                '<th class="dow" data-ng-repeat="day in data.dayNames" >{{ day }}</th>' +
                                            '</tr>' +
                                        '</thead>' +
                                        '<tbody>' +
                                            '<tr></tr>' +
                                        '</tbody>' +
                                    '</table>' +
                                  '</div>',
                        replace:true,
                        link:function(scope) {
                            scope.item = "hello world!"
                        }
                    }
                });


    }
);