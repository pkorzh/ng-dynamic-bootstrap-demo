(function() {

	angular
		.module('ngApp1', ['ngRoute'])
		.config(config);

	config.$inject = ['$routeProvider']

	function config($routeProvider) {
		$routeProvider
			.when('/app1', {
				template: require('./views/view.html'),
				controller: 'ngApp1Controller',
				controllerAs: 'vm'
			})
	}

})();