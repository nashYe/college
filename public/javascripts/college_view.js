/**
 * Created by mather on 2016/9/21.
 *��ȡѧԺ��ϸ���ϵ�JS
 */
angular.module('myApp',[])
    .controller('view_controller',['$scope','$http'
        ,function( $scope , $http ){
            var a = document.getElementById('name').innerText;
            $http.get('/college/collegeView',{params:{name:a}})
                .success(function( data , status , headers , config ){
                        $scope.col = data;
                        $scope.error = "";
                        console.log("��ȡѧԺ��ϸ���ϳɹ�");
                })
                .error(function( data , status , headers , config ){
                        $scope.col = '';
                        $scope.error = data;
                        console.log('��ȡѧԺ��ϸ����ʧ��');
                });
    }]);
