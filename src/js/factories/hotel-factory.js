angular
  .module('hotelApp')
  .factory('Hotel', Hotel);

Hotel.$inject = ['$resource'];
function Hotel($resource) {
  return new $resource('/api/hotels/:id', { id: '@id' });
}
