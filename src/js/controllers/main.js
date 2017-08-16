angular
  .module('hotelApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state'];
function MainCtrl($rootScope, $state) {
  const vm = this;

  vm.isNavCollapsed = true;

  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;
    $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    vm.isNavCollapsed = true;
  });

}
