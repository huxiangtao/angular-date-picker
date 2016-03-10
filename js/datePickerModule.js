/**
 * Created by huxiangtao on 2016/3/8.
 */

define(
    'datePickerModule',
    [
        'angular',
        'moment'
    ],
    function(ng,moment) {
        "use strict";
        return ng.module('datePickerModule',[])
            .constant('datePickerConf',{
                configureOn:null,
                inputId:'',
                minuteStep: 5,
                minView: 'minute',
                startView: 'day'
            })
            .directive('datepicker',['$log','datePickerConf',function($log,defaultConf) {


                function DateObject() {

                }
                function initDateView() {
                    var conf = {};
                    ng.extend(conf,defaultConf,directiveCof);
                    dateRender(conf,dateObj);
                }
                function dateRender(conf,dateObj) {

                }
                return {
                restrict:'E',
                template:
                    '<div class="date-picker">' +
                        '<div class="input-group" >' +
                            '<input type="text" id="dateInput" data-ng-model="date" data-ng-focus="openDatePicker($event)" data-ng-blur="closeDatePicker($event)" class="form-control text-center" placeholder="start time ~ end time">' +
                            '<div class="input-group-addon"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span></div>' +
                        '</div>' +
                        '<div id="" class="table-responsive" data-ng-init="checked = false" ng-show="checked">' +
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
                        year:function(unixDate) {
                            var selectedDate = moment.utc(unixDate).startOf('year');
                            var startDecade = (parseInt(selectedDate.year() / 10, 10) * 10);
                        },

                        month:function() {},

                        day:function() {},

                        hour:function() {},

                        minute:function() {},

                        setTime:function() {}
                    };

                    scope.changeView = function() {
                        var result = dateFactory['year'](dateObject.dateValue);
                        scope.data = result;
                    }

                    $log.log();

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