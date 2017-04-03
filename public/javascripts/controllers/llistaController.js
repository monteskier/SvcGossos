angular.module("Gossos")
  .controller('llistaController', ["$rootScope","$scope", "$location", function($rootScope, $scope, $location){
    'use strict';
    $scope.showLlista=true;
    $scope.carrega = function(){
      $.ajax({
        method:"post",
        url:"llista",
      }).then(function(results){
        $scope.results = results;
      });
    };
  }]);
