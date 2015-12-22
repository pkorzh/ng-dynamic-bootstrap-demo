(function() {

	angular
		.module('ngApp2', ['ngRoute'])
		.config(config);

	config.$inject = ['$routeProvider']

	function config($routeProvider) {
		$routeProvider
			.when('/app2', {
				template: require('./views/view.html'),
				controller: 'ngApp2Controller',
				controllerAs: 'vm'
			})
	}

})();