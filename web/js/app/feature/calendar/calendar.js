(function() {
    angular.module('wrappedup.app').controller('DatepickerDemoCtrl', function($scope, $modal, $log) {
        $scope.dt = new Date();
        $scope.minDate = new Date();
        $scope.open = function() {
            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'signup.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg',
                resolve: {
                    items: function() {
                        return $scope.dt;
                    }
                }
            });
           
            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    });
})();