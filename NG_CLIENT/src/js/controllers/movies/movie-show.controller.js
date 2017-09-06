angular
  .module('movieApp')
  .controller('MoviesCtrl', MoviesCtrl);

MoviesCtrl.$inject = ['Movie', '$stateParams'];
function MoviesCtrl(Movie, $stateParams) {
  this.id = $stateParams.id;
}


