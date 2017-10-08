angular.module('movieApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('homepage', {
      url: '/',
      templateUrl: '/js/views/home.html',
      controller: 'HomepageCtrl',
      controllerAs: 'home'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/authentications/register.html',
      controller: 'RegisterCtrl',
      controllerAs: 'register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/authentications/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .state('popularmovies', {
      url: '/popularmovies',
      templateUrl: '/js/views/popularmovies.html',
      controller: 'PopularMoviesCtrl',
      controllerAs: 'popularmovies'
    })
    .state('search', {
      url: '/search',
      templateUrl: '/js/views/search.html',
      controller: 'SearchCtrl',
      controllerAs: 'search'
    })

    .state('watchlist', {
      url: '/watchlist',
      templateUrl: '/js/views/watchlist/index.html',
      controller: 'WatchlistCtrl',
      controllerAs: 'vm'
    })

    .state('movieIndex', {
      url: '/movie/:id',
      templateUrl: '/js/views/movie/index.html',
      controller: 'MoviesCtrl',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}


