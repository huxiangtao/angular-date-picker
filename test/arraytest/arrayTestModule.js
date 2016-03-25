/**
 * Created by XuLyu on 2016/3/25.
 */

angular.module('arrayTestModule',[])
    .controller('arrayTestCtrl',['$scope','filterFilter',function($scope,$log,filterFilter) {

        var tempData = [
            {
                uid:'31',
                name:'elliot'
            },
            {
                uid:'21',
                name:'mccarthy'
            }
        ];

        function userInfo(uid) {
            for(var i = 0;i < tempData.length;i++) {
                if(tempData[i].uid == uid) return tempData[i]
            }
        }
        $scope.user = {
            permId : []
        }

        $scope.perms = [
            {
                permname: "addPerm",
                permid: 1
            },
            {
                permname: 'adminPerm',
                permid : 2
            }
        ]

        $scope.toggleSelection = function toggleSelection(perm) {
            var idx = $scope.user.permId.indexOf(perm.permid);

            // is currently selected
            if (idx > -1) {
                $scope.user.permId.splice(idx, 1);
            }
            // is newly selected
            else {
                $scope.user.permId.push(perm.permid);
            }
            //console.log($scope.user.permId)
        };

        $scope.addPermission = function() {
            angular.extend($scope.user,userInfo($scope.userid));
            $('#modalDiv').modal('show');
        }

        $scope.submit = function() {
            console.log($scope.user.permId)
        }
    }])