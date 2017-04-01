angular.module('Gossos')
  .controller("NouController",['$scope','$location','$http', function($scope, $location, $http){
    'use strict';
    $scope.desar = function(){
        console.log("Vamonos");
        $http.post('/nou', $scope.gos).then(function(results){
        console.log(results.msg);
    });
  }]);
