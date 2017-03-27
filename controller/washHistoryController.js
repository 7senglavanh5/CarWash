'use strict';

myApp.controller('WashHistoryController', [
	'$scope', 'WashService', function($scope, WashService){
		// put in WashService
		$scope.vehicles = ["car", "truck"];
	}
]);