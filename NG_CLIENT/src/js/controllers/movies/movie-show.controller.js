angular
  .module('movieApp')
  .controller('MoviesCtrl', MoviesCtrl);

MoviesCtrl.$inject = ['API', '$stateParams', '$resource'];
function MoviesCtrl(API, $stateParams, $resource) {
  this.movie = $resource(`${API}/movie/${$stateParams.id}`).get();
}


