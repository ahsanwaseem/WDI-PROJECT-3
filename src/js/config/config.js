angular
.module('hotelApp')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  //Hotels
  .state('hotelsIndex', {
    url: '/hotels',
    templateUrl: 'js/views/hotels/index.html',
    controller: 'HotelsIndexCtrl as hotelsIndex'
  })
  .state('hotelsNew', {
    url: '/hotels/new',
    templateUrl: 'js/views/hotels/new.html',
    controller: 'HotelsNewCtrl as hotelsNew'
  })
  .state('hotelsShow', {
    url: '/hotels/:id',
    templateUrl: 'js/views/hotels/show.html',
    controller: 'HotelsShowCtrl as hotelsShow'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'js/views/auth/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'js/views/auth/register.html',
    controller: 'RegisterCtrl as register'
  });
  $urlRouterProvider.otherwise('/');
}
