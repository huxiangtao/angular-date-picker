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
    .directive('test',function() {
        return {
            template:'<div>yes</div>',
            replace:true,
            link: function(scope) {
                scope.beforerender()
            },
            scope: {
                beforerender:'&'
            }

        }
    })
