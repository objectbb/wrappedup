(function() {
    angular.module('wrappedup.app').service('RequestService', ['$http', function($http) {

        return {
            send: function(data) {
                var urlrequest = "http://peaceful-lowlands-1646.herokuapp.com/web";
               //var urlrequest = "http://localhost:5000/web";

                return $http.post(urlrequest,{Body:  JSON.stringify(data)}).success(function(data){
                    return 1;
                }).error(function(err){
                    return 0;
                });
            }
        }
    }]);
})();