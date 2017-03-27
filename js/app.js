var myApp = angular.module('MyApp',['ngRoute']);

myApp.config(['$locationProvider', function($locationProvider) {
  // remove exclamation point in url when clicking on link to navigate
  $locationProvider.hashPrefix('');
}]);

myApp.config(['$routeProvider', function($routeProvider){
	var prefixPath = "partials/";

	$routeProvider
		.when('/washHistory', {
			templateUrl : prefixPath + 'washHistory.html',
			controller : 'WashHistoryController'
		})
		.when('/wash', {
			templateUrl : prefixPath + 'wash.html',
			controller : 'WashController'
		})
		.otherwise({
			redirectTo :'/wash'
		});

}]);