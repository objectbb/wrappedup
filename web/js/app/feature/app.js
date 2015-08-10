(function() {
    angular.module('wrappedup.app', ['ui.bootstrap']).
    filter('filterrequest', function() {
        return function(items) {
            var filtered = [];

             for(var key in items){  
                var item = items[key];
                if (/true/.test(item)) {
                    filtered.push(key);
                }
            }
            return filtered;
        };
    }).config(['$httpProvider', function($httpProvider) {
        // Intercept POST requests, convert to standard form encoding
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $httpProvider.defaults.transformRequest.unshift(function(data, headersGetter) {
            var key, result = [];
            for (key in data) {
                if (data.hasOwnProperty(key)) {
                    result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
                }
            }
            return result.join("&");
        })
    }]);
}());