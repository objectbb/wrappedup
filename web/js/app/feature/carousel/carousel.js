(function() {
    angular.module('wrappedup.app').controller('CarouselCtrl', function($scope, $modal, $log) {
         var slides = $scope.slides = [{image: './images/carousel/pinkcar.jpg', text:''}, 
                            {image: './images/carousel/slide1.jpg', text:''}];
    });
})();