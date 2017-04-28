angular.module("Gossos")
.controller("LoginController", ['$scope', '$location', '$http', '$rootScope', '$timeout', function($scope, $location, $http, $rootScope, $timeout) {

$scope.login = function(){

  if($rootScope.accio=="login"){
    $http({
      method:"POST",
      url:"login",
      data:{name:$scope.name, password:$scope.password}
    }).then(function(results){
      if(results.data.login){
        $rootScope.msg = results.data.msg;
        $rootScope.flag=true;
        $rootScope.session=results.data.session;
        $rootScope.accio="logout";
        $location.path('llista');
        $timeout(setTimeout,3000);
      }else{
        $rootScope.msg = results.data.msg;
        $rootScope.flag=true;
        $timeout(setTimeout,3000);
      }
    });
  }
};

if($rootScope.accio=="logout"){
  //fer el logout al route destroy session
  $http({
    method:"POST",
    url:"logout"
  }).then(function(request){
    $rootScope.msg = request.data.msg;
    $rootScope.flag=true;
    $rootScope.session = false;
    $rootScope.accio = "login";
    $timeout(setTimeout,3000);
  });
}

function setTimeout(){
  $rootScope.flag = false;
}
}]);
