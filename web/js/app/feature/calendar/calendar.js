(function() {
    angular.module('wrappedup.app').controller('DatepickerDemoCtrl', function($scope, $modal, $log) {

            $scope.dt = new Date();

        $scope.$watch('dt', function(newValue, oldValue) {
          open();
        });


        var open = function() {
            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'signup.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg',
                resolve: {
                    items: function() {
                        return $scope.items;
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