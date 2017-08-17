angular
.module('hotelApp')
.directive('googleMap', googleMap);

googleMap.$inject = ['$window','Hotel','$stateParams'];
function googleMap($window,Hotel,$stateParams) {
  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link($scope, element) {
      console.log(element[0]);

      Hotel
      .get({ id: $stateParams.id})
      .$promise
      .then(data => {
        console.log(data);
        console.log(data.lat,data.lng);

        const map = new $window.google.maps.Map(element[0], {
          zoom: 14,
          center: {lat: data.lat, lng: data.lng}
        });

        new $window.google.maps.Marker({
          position: {lat: data.lat, lng: data.lng},
          map: map,
          animation: $window.google.maps.Animation.DROP
        });
      });

    }
  };
  return directive;
}
