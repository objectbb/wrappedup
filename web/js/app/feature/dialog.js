(function() {
    angular.module('wrappedup.app').controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', 'RequestService',
        function($scope, $modalInstance, items, RequestService) {
            $scope.items = items;
            $scope.issent = -1;
            $scope.ok = function() {
                $modalInstance.close($scope.selected.item);
            };
            $scope.cancel = function() {
                $scope.request = null;
                $modalInstance.dismiss('cancel');
            };
            $scope.clear = function() {
                $scope.request = null;
            };
            $scope.send = function() {

                var combined = angular.extend($scope.request,{ date: $scope.items.toString("MM/DD/YYYY")});
                RequestService.send(angular.extend(combined,$scope.info)).success(function(data, status) {
                    if (!data.error) $scope.issent = 1;
                    else $scope.issent = 0;
                });
            };
        }
    ]);
})();