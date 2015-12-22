(function() {

	angular
		.module('ngApp3', ['ngRoute'])
		.config(config);

	config.$inject = ['$routeProvider']

	function config($routeProvider) {
		$routeProvider
			.when('/app3', {
				template: require('./views/view.html'),
				controller: 'ngApp3Controller',
				controllerAs: 'vm'
			})
	}

})();