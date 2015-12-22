require('angular')
require('angular-route')

//////////////////////////

var contexts = {
	'ngApp1': function($q) {
		return $q(function(resolve) {
			require.ensure([], function(require) {
  				resolve(require('ng-app-1'))
			})
		})
	},
	'ngApp2': function($q) {
		return $q(function(resolve) {
			require.ensure([], function(require) {
  				resolve(require('ng-app-2'))
			})
		})
	},
	'ngApp3': function($q) {
		return $q(function(resolve) {
			require.ensure([], function(require) {
  				resolve(require('ng-app-3'))
			})
		})
	}
}

//////////////////////////

angular
	.module('vmrAppBootstrapper', [])

angular
	.module('vmrAppBootstrapper')
	.run(bootstrapper)

bootstrapper.$inject = ['$q']

function bootstrapper($q) {
	var modules_to_load = ['ngApp1',  'ngApp3'];

	$q.all(modules_to_load.map(function(module) {
		return contexts[module].call(null, $q)
	})).then(function() {

		var appPlaceholder = document.createElement('div')
		document.body.appendChild(appPlaceholder)

		var ngViewPlaceholder = document.createElement('div')
		ngViewPlaceholder.classList.add('ng-view')
		appPlaceholder.appendChild(ngViewPlaceholder)

		angular
			.module('vmrDynamicApp', modules_to_load)

		angular.bootstrap(appPlaceholder, ['vmrDynamicApp'])

	})
}

//////////////////////////

angular.element(document).ready(function() {
	var loaderAppPlaceholder = document.createElement('div')
	document.body.appendChild(loaderAppPlaceholder)

	angular.bootstrap(loaderAppPlaceholder, ['vmrAppBootstrapper'])
})