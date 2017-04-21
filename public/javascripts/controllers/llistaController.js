angular.module("Gossos")
  .controller('LlistaController', ["$rootScope","$scope", "$location", "$http", "$timeout", function($rootScope, $scope, $location, $http, $timeout){
    'use strict';

    $scope.obtindreResultats = function(){
      $http({
        method:"GET",
        url:"llista"
      }).then(function(results){
        console.log(results.data);
        $scope.resultats = results.data;
        $timeout(setTimeout, 3000);
      });
    };
    $scope.editar = function(obj){
      $rootScope.objId = obj;
      $location.path("/editar");
    };

    $scope.eliminar = function(obj) {
        $rootScope.objId = obj;
        $http({
            method: "POST",
            url: "eliminar",
            data: {
                "obj":obj
            }
        }).then(function(results) {
            $scope.obtindreResultats();
            $rootScope.msg = results.data.msg;
            $rootScope.flag = true;
        });
    };

    function setTimeout(){
     $rootScope.flag = false;
   }


  }]);
