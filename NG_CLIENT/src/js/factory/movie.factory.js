angular
  .module('movieApp')
  .factory('Movie', movieFactory);

movieFactory.$inject = ['API', '$resource'];
function movieFactory(API, $resource){
  return $resource(`${API}/movies/:id`, { id: '@_id'});
}
