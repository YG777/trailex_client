angular.module('movieApp')
  .factory('PopularMovies', PopularMovies);

PopularMovies.$inject = ['API', '$resource'];
function PopularMovies(API, $resource) {
  return $resource(`${API}popular/`);
}