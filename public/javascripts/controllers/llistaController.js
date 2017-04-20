angular.module("Gossos")
  .controller('LlistaController', ["$rootScope","$scope", "$location", "$http", function($rootScope, $scope, $location, $http){
    'use strict';
    console.log("controlador");

    $scope.obtindreResultats = function(){
      $http({
        method:"GET",
        url:"llista"
      }).then(function(results){
        console.log(results.data);
        $scope.resultats = results.data;
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
            $scope.msg = results.msg;
            console.log(results.msg);
            $scope.obtindreResultats();
        });
    };


  }]);
