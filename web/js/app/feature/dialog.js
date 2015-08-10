(function() {
    angular.module('wrappedup.app').controller('ModalInstanceCtrl',['$scope', '$modalInstance', 'items', 'RequestService', 
      function($scope, $modalInstance, items, RequestService) {
        $scope.items = items;

        $scope.ok = function() {
            $modalInstance.close($scope.selected.item);
        };
        $scope.cancel = function() {
            $modalInstance.dismiss('cancel'); 
        };

        $scope.clear = function() {
           $scope.request = null;
        };
        
        $scope.send = function() {
           RequestService.send($scope.request);
        };

    }]);
})();

