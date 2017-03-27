'use strict';

myApp.service('WashService', ['$rootScope','$http', function($rootScope, $http){
	console.log("HTTPSERVICE");
	var transactionObject = {
			type : "",
			isBedDown : false,
			isMuddy : false,
			cost : 0,
			muddyFee : 0,
			licensePlate : "",
			count : 0
	};

	var transactionHistory = {};


	var getCarType = function(){
		var vehicleObject = [
			{
				type : "car",
				cost : 5,
			},
			{
				type : "truck",
				cost : 10,
				isMuddyBed : false,
				muddyBedFee : 2,
				isBedDown : false
			}
		];

		return vehicleObject;
	}
	
	var getTransaction = function(){

	}

	var setTransaction = function(obj){
		switch (obj.type) {
			case "car" : 
				washCar(obj);
				break;
			case "truck" : 
				washTruck(obj);
			default : 
				break;
		}
		
	}

	var getTransactionObject = function(){
		return transactionObject;
	}

	var isGoodLicensePlate = function(val){
		var badPlate = 1111111;

		if (val === badPlate){
			return false;
		}
		else {
			return true;
		}
	}

	var washCar = function(obj){
		var record = transactionHistory[obj.licensePlate];
		if (record){
			obj.cost = 5/2;
			record.count++;
		}
		else{
			obj.count = 1;
			obj.cost = 5;
			transactionHistory[obj.licensePlate] = obj;
		}

		console.log(transactionHistory)
	}

	var washTruck = function(obj){

		
		if(obj.isBedDown === "no"){
			obj.cost = 10;

			if (obj.isMuddy === "yes"){
				obj.cost += 2;
			}

			var record = transactionHistory[obj.licensePlate];
			if (record){
				obj.cost = obj.cost /2;
				record.count++;
			}
			else {
				obj.count = 1;
				transactionHistory[obj.licensePlate] = obj;
			}



		}

		console.log(transactionHistory)

	}


	return {
		getCarType : getCarType,
		getTransaction : getTransaction,
		setTransaction : setTransaction,
		getTransactionObject : getTransactionObject,
		isGoodLicensePlate : isGoodLicensePlate
	};

}]);