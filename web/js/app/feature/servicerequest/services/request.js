(function() {
    angular.module('wrappedup.app').service('RequestService', ['$http', function($http) {

        return {
            send: function(data) {
                var urlrequest = "http://peaceful-lowlands-1646.herokuapp.com/web";

                return $http.post(urlrequest,{Body:  JSON.stringify(data)}).success(function(data){
                    return data;
                }).error(function(err){
                    alert(JSON.stringify(err));
                });
            }
        }
    }]);
})();