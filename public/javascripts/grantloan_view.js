/**
 * Created by mather on 2016/9/21.
 *��ȡ��������ϸ���ϵ�JS
 */
angular.module('myApp',[])
    .controller('view_controller',['$scope','$http'
        ,function( $scope , $http ){
            var a = document.getElementById('name').innerText;
            $http.get('/grantLoan/grantLoanView',{params:{name:a}})
                .success(function( data , status , headers , config ){
                        $scope.loan = data;
                        $scope.error = "";
                        console.log("��ȡѧԺ��ϸ���ϳɹ�");
                })
                .error(function( data , status , headers , config ){
                        $scope.loan = '';
                        $scope.error = data;
                        console.log('��ȡѧԺ��ϸ����ʧ��');
                });
    }]);
