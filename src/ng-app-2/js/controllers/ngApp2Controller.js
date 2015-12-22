(function() {

	angular
		.module('ngApp2')
		.controller('ngApp2Controller', ngApp2Controller)


	function ngApp2Controller() {
		var vm = this;

		vm.title = 'ng app 2 hello'
	}

})()