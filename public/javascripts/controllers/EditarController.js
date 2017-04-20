angular.module('Gossos')
    .controller("EditarController", ['$scope', '$location', '$http', '$rootScope', function($scope, $location, $http, $rootScope) {
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
                console.log(results);
            });
        };
    }]);
