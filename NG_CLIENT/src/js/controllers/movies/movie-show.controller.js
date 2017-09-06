angular
  .module('movieApp')
  .controller('MoviesCtrl', MoviesCtrl);

MoviesCtrl.$inject = ['API', '$stateParams', '$resource', '$scope'];
function MoviesCtrl(API, $stateParams, $resource, $scope) {
  $scope.getIframeSrc = function(src){
    return 'https://www.youtube.com/embed/' + src;
  };

  var movie = $resource(`${API}/movie/${$stateParams.id}`).get();
  this.movie = movie;
  console.log(movie);
}


