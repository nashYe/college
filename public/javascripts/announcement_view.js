/**
 * Created by mather on 2016/9/21.
 */
angular.module('myApp',[])
    .controller('view_controller',['$scope','$http'
        ,function( $scope , $http ){
            var a = document.getElementById('title').innerText;
            $http.get('/announcement/announcementView',{params:{title:a}})
                .success(function( data , status , headers , config ){
                        $scope.ann = data;
                        $scope.error = "";
                        console.log("获取详细公告成功");
                })
                .error(function( data , status , headers , config ){
                        $scope.ann = '';
                        $scope.error = data;
                        console.log('获取详细公告失败');
                });
    }]);
