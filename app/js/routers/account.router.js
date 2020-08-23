angular.module('account.router', [ 'ui.router' ]).config(function($stateProvider, $urlRouterProvider) {
	// $urlRouterProvider.otherwise('/account/login');
	$stateProvider
		.state('account', {
			url: '/account',
			templateUrl: 'app/views/account/index.html'
		})
		.state('login', {
			url: '/login',
			parent: 'account',
			controller: 'LoginController',
			templateUrl: 'app/views/account/sign-in.html'
		})
		.state('registrasi', {
			url: '/registrasi',
			parent: 'account',
			controller: 'registrasiController',
			templateUrl: 'app/views/account/sign-up.html'
		});
});