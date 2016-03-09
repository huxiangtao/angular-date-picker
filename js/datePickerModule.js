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
        return ng.module('datePickerModule',[])
            .constant('datePickerConf',{
                minuteStep: 5,
                minView: 'minute',
                startView: 'day'
            })
            .directive('datepicker',['$log','datePickerConf',function($log,defaultConf) {
            return {
                restrict:'E',
                template:
                        '<div class="date-picker">' +
                            '<div class="input-group" >' +
                                '<input type="text" data-ng-focus="openDatePicker($event)" data-ng-blur="closeDatePicker($event)" class="form-control text-center" placeholder="start time ~ end time">' +
                                '<div class="input-group-addon"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span></div>' +
                            '</div>' +
                            '<div class="table-responsive" data-ng-init="checked = false" ng-show="checked">' +
                                '<table class="table table-striped">' +
                                    '<thead>' +
                                        '<tr>' +
                                            '<th class="left"></th>' +
                                            '<th class="switch" data-ng-click="changeView()"></th>' +
                                            '<th class="right"></th>' +
                                        '</tr>' +
                                        '<tr>' +
                                            '<th class="dow" data-ng-repeat="day in data.dayNames" >{{ day }}</th>' +
                                        '</tr>' +
                                    '</thead>' +
                                    '<tbody>' +
                                        '<tr>asfasf</tr>' +
                                    '</tbody>' +
                                '</table>' +
                            '</div>' +
                        '</div>',

                replace:true,
                link:function(scope,element,attrs) {

                    var dateFactory = {
                        year:function() {},

                        month:function() {},

                        day:function() {},

                        hour:function() {},

                        minute:function() {},

                        setTime:function() {}
                    };

                    scope.changeView = function() {
                        var result = dateFactory[viewName](dateObject.dateValue);
                        scope.data = result;
                    }
                    scope.openDatePicker = function(event) {
                        if(event) event.preventDefault();
                        if(!scope.checked){
                            scope.checked = true;
                        }
                    }
                    scope.closeDatePicker = function(event) {
                        if(event) event.preventDefault();
                        if(scope.checked) {
                            scope.checked = false;
                        }
                    }
                    scope.day = "2015/03/09"
                }
            }
        }]);


    }
);