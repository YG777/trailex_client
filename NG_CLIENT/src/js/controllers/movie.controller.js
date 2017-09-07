angular
  .module('movieApp')
  .controller('MoviesCtrl', MoviesCtrl);

MoviesCtrl.$inject = ['API', '$stateParams', '$resource', '$scope'];

function MoviesCtrl(API, $stateParams, $resource, $scope) {
  $scope.getIframeSrc = function (src) {
    return 'https://www.youtube.com/embed/' + src;
  };

  $scope.addToWatchlist = function () {
    var movieId = $scope.vm.movie.id;
    $scope.vm.movie.in_watchlist = true;
    $resource(`${API}/watchlist`, {
      movie_id: movieId,
      movie_title: $scope.vm.movie.title
    }, {
      'add': {
        method: 'post'
      }
    }).add();
  };

  $scope.removeFromWatchlist = function () {
    var movieId = $scope.vm.movie.id;
    $scope.vm.movie.in_watchlist = false;
    $resource(`${API}/watchlist/${movieId}`, {}, {
      'remove': {
        method: 'delete'
      }
    }).remove();
  };

  var movie = $resource(`${API}/movie/${$stateParams.id}`).get();
  this.movie = movie;

  var comments = $resource(`${API}/movie/${$stateParams.id}/comments`).query();
  this.comments = comments;
}