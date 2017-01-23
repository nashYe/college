/**
 * Created by mather on 2016/9/21.
 */
//获取公告列表
angular.module('myApp',[])
            .controller('announcementController',['$scope','$http',
                function($scope,$http){
                    $http.get('/announcement/list')
                        .success(function(data,status,headers,config){
                           $scope.anns = data;
                            $scope.error = "";
                            console.log("获取公告列表成功！");
                        })
                        .error(function(data,status,headers,config){
                            $scope.anns={};
                            $scope.error = data;
                            console.log("获取公告列表错误！");
                        });

                }])
     .controller('DelController',['$scope','$http',
        function($scope,$http){
            var Del = $(".Del");
            Del.click(function(){
                var p = $(this).parent('td').siblings('.title').text();
                $http.get('/announcement/Del',{params:{ title : p }})
                    .success(function( data , status , headers , config){
                        alert(data);
                        location.href='/announcement';
                    })
                    .error(function( data , status , headers , config){
                        alert(data);
                    });
            });
    }]);