var angularApp = angular.module('Gossos', ['ui.bootstrap','ngRoute']);
angularApp.controller('MainController', function($scope, $location, $rootScope){
  'use strict';

  $scope.initApp = function(){
    $rootScope.flag = false;
  };

  function setTimeout(){
    $rootScope.flag = false;
  }

}).config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider){
  'use strict';
  $locationProvider.html5Mode('true');

  $routeProvider.when('/seleccio',{
    templateUrl:"templates/seleccio.html",
    controller:"SeleccioController"
  });

  $routeProvider.when('/llista',{
    templateUrl:"templates/llista.html",
    controller:"LlistaController"
  });

  $routeProvider.when('/nou',{
    templateUrl:"templates/nou.html",
    controllers:"NouController"
  });
  $routeProvider.when('/editar',{
    templateUrl:"templates/editar.html",
    controllers:"EditarController"
  });

}]);
