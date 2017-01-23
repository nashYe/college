/**
 * Created by mather on 2016/9/21.
 *获取奖助贷详细资料的JS
 */
angular.module('myApp',[])
    .controller('view_controller',['$scope','$http'
        ,function( $scope , $http ){
            var a = document.getElementById('name').innerText;
            $http.get('/grantLoan/grantLoanView',{params:{name:a}})
                .success(function( data , status , headers , config ){
                        $scope.loan = data;
                        $scope.error = "";
                        console.log("获取学院详细资料成功");
                })
                .error(function( data , status , headers , config ){
                        $scope.loan = '';
                        $scope.error = data;
                        console.log('获取学院详细资料失败');
                });
    }]);
