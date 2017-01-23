/**
 * Created by mather on 2016/9/8.
 */
angular.module('myApp',[]).
    controller('myController',['$scope','$http',
                                    function($scope,$http){
        $http.get('/user/profile')
            .success(function(data,status,headers,config){
                $scope.user = data;
                $scope.error = "";
            }).
            error(function(data,status,headers,config){
            $scope.user={};
            $scope.error = data;
            console.log("获取用户资料错误！");
        });
}]);