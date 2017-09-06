angular
  .module('movieApp')
  .config(Inteceptors);

Inteceptors.$inject = ['$httpProvider'];
function Inteceptors($httpProvider){
  $httpProvider.interceptors.push('AuthInterceptor');
}