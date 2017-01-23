/*
*获取学院资料js
*/

angular.module('myApp',[])
    .controller('collegeController',['$scope','$http',
        function($scope,$http){
            $http.get('/college/list')
                .success(function(data,status,headers,config){
                    $scope.cols = data;
                    $scope.error = "";
                    console.log("获取学院列表成功！");
                })
                .error(function(data,status,headers,config){
                    $scope.cols={};
                    $scope.error = data;
                    console.log("获取学院列表错误！");
                });

        }])
    .controller('DelController',['$scope','$http',
        function($scope,$http){
            $(".Del").click(function(e){
				e.preventDefault();
                var p = $(this).parent('td').siblings('.name').text();
                $http.get('/college/del',{params:{name:p}})
                    .success(function( data , status , headers , config){
                       console.log(data);
					   alert("删除成功");
                       location.href='/college';
                    })
                    .error(function( data , status , headers , config){
						alert("删除失败");
                       console.log('删除失败');
                    });
            });
        }]);
		
		
		
		
		
		
		
		
		
		
		