angular.module('movieApp')
  .factory('Movie', Movie);

Movie.$inject = ['API', '$resource'];
function Movie(API, $resource) {
  return $resource(`${API}popular/`);
}