angular.module('movieApp')
  .controller('MoviesIndexCtrl', MoviesIndexCtrl);

MoviesIndexCtrl.$inject = ['Movie'];
function MoviesIndexCtrl(Movie) {
  const vm = this;
  vm.index = index;

  vm.index();
  function index() {
    vm.all = Movie.query();
  }

}


