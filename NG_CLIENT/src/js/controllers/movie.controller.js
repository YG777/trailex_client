angular
  .module('movieApp')
  .controller('MoviesCtrl', MoviesCtrl);

MoviesCtrl.$inject = ['API', '$stateParams', '$resource', '$scope'];

function MoviesCtrl(API, $stateParams, $resource, $scope) {
  $scope.getIframeSrc = function (src) {
    return 'https://www.youtube.com/embed/' + src;
  };

  $scope.watchlist = function () {
    var movieId = $scope.vm.movie.id;
    if($scope.isInWatchlist){
      $resource(`${API}/watchlist/${movieId}`, {}, {
        'remove': { method: 'delete' }
      }).remove();

      $scope.isInWatchlist = false;
      $scope.watchlistIcon = "plus";
    }else{
      $resource(`${API}/watchlist`, {
        movie_id: movieId,
        movie_title: $scope.vm.movie.title
      }, {
        'add': { method: 'post' }
      }).add();

      $scope.isInWatchlist = true;
      $scope.watchlistIcon = "minus";
    }
  };

  var movie = $resource(`${API}/movie/${$stateParams.id}`).get();
  this.movie = movie;

  var comments = $resource(`${API}/movie/${$stateParams.id}/comments`).query();
  this.comments = comments;

  $scope.watchlistIcon = "plus";
}