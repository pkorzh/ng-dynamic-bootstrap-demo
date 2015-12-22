(function() {

	angular
		.module('ngApp1')
		.controller('ngApp1Controller', ngApp1Controller)


	function ngApp1Controller() {
		var vm = this;

		vm.title = 'ng app 1 hello'
	}

})()