angular.module('app.router', [ 'ui.router', 'account.router', 'admin.router', 'user.router' ])
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/account/login');
});
