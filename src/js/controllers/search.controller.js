angular.module('movieApp')
  .controller('SearchCtrl', SearchCtrl);

SearchCtrl.$inject = ['API', '$resource', '$location'];
function SearchCtrl(API, $resource, $location) {
  var searchTerm = $location.search().searchterm;
  this.searchTerm = searchTerm;
  var items = $resource(`${API}search?searchterm=${searchTerm}`);
  this.all = items.query();
  
}