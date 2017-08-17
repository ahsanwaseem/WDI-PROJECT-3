angular
  .module('hotelApp')
  .controller('HotelsIndexCtrl', HotelsIndexCtrl)
  .controller('HotelsNewCtrl', HotelsNewCtrl)
  .controller('HotelsShowCtrl', HotelsShowCtrl);

HotelsIndexCtrl.$inject = ['Hotel','$state'];

function HotelsIndexCtrl(Hotel) {
  const vm = this;
  vm.all = Hotel.query();
}

function HotelsNewCtrl(Hotel, $state) {
  const vm = this;
  vm.hotel = {};
  function hotelsCreate() {
    Hotel
      .save(vm.hotel)
      .$promise
      // .then(() => console.log(vm.hotel));
      .then(() => $state.go('hotelsIndex'));
  }
  vm.create = hotelsCreate;
}

HotelsShowCtrl.$inject = ['Hotel', '$stateParams'];
function HotelsShowCtrl(Hotel, $stateParams) {
  const vm = this;
  vm.hotel = Hotel.get($stateParams);
}
