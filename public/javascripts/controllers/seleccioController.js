angular.module('Gossos')
  .controller("SeleccioController",['$rootScope','$scope','$location', function($rootScope, $scope, $location){
    'use strict';
    $scope.carregar = function(opcio){
      $rootScope.tipusOpcio = opcio;
      $location.path('/'+opcio);
    };
    $scope.print = function(card){
      /*var innerContents = document.getElementById(card).innerHTML;
      var popupWindow = window.open('','_blank','width:600, height:400');
      popupWindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="stylesheets/bootstrap.css" /><link rel="stylesheet" type="text/css" href="stylesheets/print.css" /></head><body onload="window.print()">' + innerContents + '</body></html>');
      popupWindow.document.close();
      */
      window.print();
      window.close();
    };
  }]);
