angular.module('Gossos')
    .controller("EditarController", ['$scope', '$location', '$http', '$rootScope', '$timeout', function($scope, $location, $http, $rootScope, $timeout) {
        var id = $rootScope.objId;

        $scope.getObject = function() {
            $http({
                method: "POST",
                url: "editar",
                data: {
                    "obj": id
                }
            }).then(function(results) {
                $scope.gos = results.data.censGos;
                $rootScope.printFlag= true;

            });
        };
        $scope.updateObject = function(){
          $http({
            method:"POST",
            url:"update",
            data:{
              "obj": id, "gos":$scope.gos
            }
          }).then(function(results){
            $rootScope.msg = results.data.msg;
            $rootScope.flag = true;
            $timeout(setTimeout, 3000);
          });
        };
    }]);
