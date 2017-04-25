angular.module('Gossos')
  .controller("NouController",['$scope','$location','$http','$timeout','$rootScope', function($scope, $location, $http, $timeout, $rootScope){
    'use strict';
    $rootScope.printFlag = true;
        $scope.desar = function(){
        $http({
        method:"POST",
        url:"nouPost",
        data:{"gos":$scope.gos}
      }).then(function(results){
        $rootScope.msg = results.data.msg;
        $rootScope.flag = true;
        $timeout(setTimeout, 3000);
    });
  };

  function setTimeout(){
    $rootScope.flag = false;
  }

  }]);
