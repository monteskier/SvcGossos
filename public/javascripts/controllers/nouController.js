angular.module('Gossos')
  .controller("NouController",['$scope','$location','$http', function($scope, $location, $http){
    'use strict';

    $scope.desar = function(){
        console.log("Vamonos");
        $http({
        method:"POST",
        url:"/nouPost",
        data:{"gos":$scope.gos}
      }).then(function(results){
        console.log(results.msg);
    });
  }

  }]);
