angular.module('user.router', [ 'ui.router' ]).config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/user/home');
	$stateProvider
		.state('user', {
			url: '/user',
			controller: 'userController',
			templateUrl: './client/views/user/index.html'
		});
});
