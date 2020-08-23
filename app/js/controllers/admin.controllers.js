angular
	.module('admin.controller', [])
	.controller('adminController', adminController)
	.controller('adminPersyaratanController', adminPersyartanController)
	.controller('adminMahasiswaController', adminMahasiswaController)
	.controller('adminAddMahasiswaController', adminAddMahasiswaController);

function adminController($scope, $state, ) {
	$scope.role = ['Admin', 'Dosen', 'Mahasiswa'];
	$scope.Message = "Home";
	
	
	$scope.InRole=(roles)=>{
		userRoleLogin="Prodi";
		return roles.find(x=>x== userRoleLogin)?true:false;
	}
	$scope.$on("SendUp", function (evt, data) {
		$scope.breadcrumb = data.breadcrumb;
		$scope.title = data.title;
		window.document.title = "Sistem Akademik - "+data.title;
	});
	
}

function adminPersyartanController($scope, helperServices) {
	$scope.$emit("SendUp", "Testing");
}

function adminMahasiswaController($scope, helperServices) {
	$scope.model ={};
	$scope.model.idmahasiswa=1;
	$scope.$emit("SendUp", {title:'Mahasiswa', breadcrumb:'Mahasiswa'});
}
function adminAddMahasiswaController($scope, helperServices, $stateParams) {
	console.log($stateParams);
	$scope.$emit("SendUp", {title:'Mahasiswa', breadcrumb:'Tambah Mahasiswa'});
}

