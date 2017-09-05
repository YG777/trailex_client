angular
  .module('movieApp')
  .factory('Watchlist', watchlistFactory);

watchlistFactory.$inject = ['API', '$resource'];
function watchlistFactory(API, $resource){
  return $resource(`${API}/watchlist/:id`, { id: '@_id'});
}