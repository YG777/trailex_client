angular.module('movieApp')
  .controller('PopularMoviesCtrl', PopularMoviesCtrl);

PopularMoviesCtrl.$inject = ['API', '$resource'];
function PopularMoviesCtrl(API, $resource) {
  this.all = $resource(`${API}/popular`).query();
}


