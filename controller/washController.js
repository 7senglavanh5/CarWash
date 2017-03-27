'use strict';

myApp.controller('WashController', [
	'$scope', 'WashService', function($scope, WashService){
		// put in WashService
		var ws = WashService;

		$scope.transaction = ws.getTransactionObject();
		$scope.vehicles = ws.getCarType();
		$scope.isDenied = false;
		$scope.washingCar = false;

		$scope.validateVehicle = function(obj){
			$scope.isDenied = false;
			if (ws.isGoodLicensePlate(obj.licensePlate) === true){
				ws.setTransaction(obj);
				$scope.washingCar = true;
			}
			else{
				$scope.isDenied = true;
			}
		}
	}
]);