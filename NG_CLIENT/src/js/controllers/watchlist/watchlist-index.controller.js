angular
  .module('movieApp')
  .controller('WatchlistsIndexCtrl', WatchlistsIndexCtrl);

WatchlistsIndexCtrl.$inject = ['Watchlist'];
function WatchlistsIndexCtrl(Watchlist) {
  const vm = this;

  vm.watchlists = Watchlist.query();
}
