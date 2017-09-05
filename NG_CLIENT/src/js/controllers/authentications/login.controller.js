angular
  .module('movieApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService','$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.login = () => {
    console.log(vm.user);
    User
      .login(vm.user).$promise
      .then(() => {
        CurrentUserService.getUser();
        console.log('hello');
        $state.go('homepage');
      }, err => {
        console.log(err);
      });
  };
}
