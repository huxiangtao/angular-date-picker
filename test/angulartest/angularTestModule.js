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
        $scope.elliot = "elliot"
        $scope.date = "2016/03/04"
    })
    .directive('test',['$log',function($log) {
        return {
            restrict: 'E',
            require: 'ngModel',
            template:
            '<div>' +
                '<div ng-click="beforerender()">yes</div>' +
                '<span>{{date}}</span>' +
            '</div>',
            replace:true,
            link: function(scope) {
                $log.info(scope.beforerender)
                $log.info(scope.date)
                //scope.beforerender()
            },
            scope: {
                date:'=',
                beforerender:'&'
            }

        }
    }])
