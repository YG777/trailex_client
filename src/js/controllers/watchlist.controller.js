angular
  .module('movieApp')
  .controller('WatchlistCtrl', WatchlistCtrl);

WatchlistCtrl.$inject = ['API',  '$resource'];
function WatchlistCtrl(API, $resource) {
  var watchlist = $resource(`${API}/watchlist`).query();
  console.log(watchlist);
  this.watchlist = watchlist;
}
