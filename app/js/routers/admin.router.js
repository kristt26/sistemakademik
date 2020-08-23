angular.module('admin.router', [ 'ui.router.title' ]).config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('admin', {
			url: '/admin',
			controller: 'adminController',
			templateUrl: 'app/views/admin/index.html',
		})
		.state('admin-mahasiswa', {
			url: '/mahasiswa',
			parent: 'admin',
			controller: 'adminMahasiswaController',
			templateUrl: 'app/views/admin/mahasiswa.html'
		})
		.state('admin-addmahasiswa', {
			url: '/addmahasiswa/:id',
			parent: 'admin',
			controller: 'adminAddMahasiswaController',
			templateUrl: 'app/views/admin/addmahasiswa.html'
		});
});
