var angularApp = angular.module('Gossos', ['ui.bootstrap','ngRoute']);
angularApp.controller('MainController', function($scope, $location){
  'use strict';
  console.log("Ostie");
  $scope.initApp = function(){
    //$location.path('/seleccio');

  };

}).config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider){
  'use strict';
  $locationProvider.html5Mode('true');

  $routeProvider.when('/seleccio',{
    templateUrl:"/views/seleccio.html",
    controller:"SeleccioController"
  });

  $routeProvider.when('/llista',{
    templateUrl:"/views/llista.html",
    controller:"LlistaController"
  });

  $routeProvider.when('/nou',{
    templateUrl:"/views/nou.html",
    controllers:"NouController"
  });
}]);
