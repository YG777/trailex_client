angular.module('movieApp')
  .controller('SearchCtrl', SearchCtrl);

function SearchCtrl($location) {
  var searchTerm = $location.search().searchterm;
  this.searchTerm = searchTerm;
}