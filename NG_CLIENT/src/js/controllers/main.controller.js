angular
  .module('movieApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http'];
function MainCtrl($http) {
  const vm = this;
}