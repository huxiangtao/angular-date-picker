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
            template:'<div ng-click="beforerender()">yes</div>',
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
