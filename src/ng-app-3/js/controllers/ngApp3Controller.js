(function() {

	angular
		.module('ngApp3')
		.controller('ngApp3Controller', ngApp3Controller)


	function ngApp3Controller() {
		var vm = this;

		vm.title = 'ng app 3 hello'
	}

})()