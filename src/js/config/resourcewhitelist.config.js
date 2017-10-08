angular
  .module('movieApp')
  .config(Whitelist);

Whitelist.$inject = ['$sceDelegateProvider'];
function Whitelist($sceDelegateProvider){
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
}