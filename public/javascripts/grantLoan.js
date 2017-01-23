/*
*获取奖助贷资料js
*/

angular.module('myApp',[])
    .controller('grantController',['$scope','$http',
        function($scope,$http){
            $http.get('/grantLoan/list')
                .success(function(data,status,headers,config){
                    $scope.loans = data;
                    $scope.error = "";
					console.log(data);
                    console.log("获取奖助贷列表成功！");
                })
                .error(function(data,status,headers,config){
                    $scope.loans={};
                    $scope.error = data;
                    console.log("获取奖助贷列表错误！");
                });

        }])
    .controller('DelController',['$scope','$http',
        function($scope,$http){
            $(".Del").click(function(e){
				e.preventDefault();
                var p = $(this).parent('td').siblings('.name').text();
                $http.get('/grantLoan/del',{params:{name:p}})
                    .success(function( data , status , headers , config){
                       console.log(data);
					   alert("删除成功");
                       location.href='/grantLoan';
                    })
                    .error(function( data , status , headers , config){
						alert("删除失败");
                       console.log('删除失败');
                    });
            });
        }]);