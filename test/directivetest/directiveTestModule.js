/**
 * Created by XuLyu on 2016/3/24.
 */

angular.module('directiveTestApp',[])
    .controller('directiveCtrl',function() {

    })
    .directive('addPerson',['$log',function() {
        return {
            restrict:'E',
            transclude:true,
            template:
                '<div class="input-group">' +
                    '<input type="text" class="form-control" placeholder="请输入UID">' +
                        '<span class="input-group-btn">' +
                        '<a class="btn btn-default" ng-click="showPanel()" type="button"><span class="glyphicon glyphicon-star" aria-hidden="true"></span>添加</a>' +
                    '</span>' +
                '</div>' +
                '<br>' ,
            controller:['$scope',function($scope) {
                $scope.showPanel = function() {
                    $scope.check = true
                }
            }]
        }
    }])
    .directive('myPanel',function() {
        return {
            require:'addPerson',
            restricr:'E',
            transclude:true,
            scope:{
                check:'@'
            },
            template:
                '<div ng-show="check" class="panel panel-default">' +
                    '<div class="panel-heading">' +
                        '<h3 class="panel-title">User Name</h3>' +
                    '</div>' +
                    '<div class="panel-body">Panel content' +
                    '</div>' +
                '</div>' ,
            link:function(scope,addCtrl) {

            }
        }
    })
