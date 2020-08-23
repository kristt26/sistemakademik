angular
	.module('app.service', [
		'message.service',
		'auth.service',
		'storage.services',
		'helper.service',
		'admin.service',
		'user.service'
	])
	.controller('homeController', homeController);

	function homeController() {
		
	}
