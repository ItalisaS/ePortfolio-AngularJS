var app = angular.module("ShopApp", []);

app.controller("ShopController", function($scope){
	
	$scope.items = [
		{id: 1, text: 'Cheese - 200g', bought: false},
		{id: 2, text: 'Bread', bought: false},
		{id: 3, text: 'Sugar x4', bought: false}
	];
	
	$scope.clearList = function() {
		//TODO
	}
	
	$scope.addItem = function() {
		//TODO
	}
	
	$scope.deleteItem = function(item) {
		//TODO
	}
	
});