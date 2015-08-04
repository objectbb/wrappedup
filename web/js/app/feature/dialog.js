(function() {
    angular.module('wrappedup.app').controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {
        $scope.items = items;

        $scope.ok = function() {
            $modalInstance.close($scope.selected.item);
        };
        $scope.cancel = function() {
            $modalInstance.dismiss('cancel'); 
        };
    });
})();