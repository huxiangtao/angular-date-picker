/**
 * Created by huxiangtao on 2016/3/23.
 */


angular.module('angularTestModule',[])
    .controller('angularTestCtrl',function($scope) {
        $scope.name = "elliot"
        $scope.age = "18"
        $scope.change = function() {
            alert("window")
        }
    })
    .directive('test',['$log',function($log) {
        return {
            template:
                '<div class="date-picker">' +
                    '<div class="input-group" >' +
                        '<input type="text" id="dateInput" data-ng-model="date" data-ng-focus="openDatePicker($event)" data-ng-blur="closeDatePicker($event)" class="form-control text-center" placeholder="start time ~ end time">' +
                        '<div class="input-group-addon"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span></div>' +
                    '</div>' +
                    '<div id="" class="table-responsive" data-ng-init="checked = true" ng-show="checked">' +
                        '<table class="table table-striped">' +
                            '<thead>' +
                                '<tr>' +
                                    '<th class="left">adad</th>' +
                                    '<th class="switch" data-ng-click="changeView()">sdfasd</th>' +
                                    '<th class="right">asdfas</th>' +
                                '</tr>' +
                                '<tr>' +
                                    '<th class="dow" data-ng-repeat="day in data.dayNames" >asdasd</th>' +
                                '</tr>' +
                            '</thead>' +
                            '<tbody>' +
                                '<tr>elliot</tr>' +
                            '</tbody>' +
                        '</table>' +
                    '</div>' +
                '</div>',
            replace:true,
            link: function(scope) {
                $log.info(scope.beforerender)
                //scope.beforerender()
            },
            scope: {
                beforerender:'&'
            }

        }
    }])
