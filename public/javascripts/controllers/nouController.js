angular.module('Gossos')
  .controller("NouController",['$rootScope','$scope','$location', function($scope, $location){
    'use strict';
    $scope.desar = function(gos){
      console.log(gos);
    }
  }]);
