angular.module('movieApp')
  .controller('PopularMoviesCtrl', PopularMoviesCtrl);

PopularMoviesCtrl.$inject = ['PopularMovies'];
function PopularMoviesCtrl(PopularMovies) {
  this.all = PopularMovies.query();
}


