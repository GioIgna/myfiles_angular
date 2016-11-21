//definizione della App
var app= angular.module('myApp', ['ngRoute']);

//definizine del modulo routing, per l'indirizzamento delle pagine
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/primi', {
			templateUrl:'partial/primiPartial.html',
			controller:'primiContr'
		})
		.when('/secondi', {
			templateUrl:'partial/secondiPartial.html',
			controller:'secondiContr'
		})
		.when('/bird', {
			templateUrl:'partial/birdPartial.html',
			controller:'birdContr'
		})
		.otherwise({
			redirectTo:'/'
		});
}]);
