var app = angular.module("ShopApp", []);

app.controller("ShopController", function($scope){
	
	$scope.items = [
		{id: 1, text: 'Cheese - 200g', bought: false},
		{id: 2, text: 'Bread', bought: false},
		{id: 3, text: 'Sugar x4', bought: false}
	];
	
	$scope.clearList = function() {
		$scope.items.length = 0;
	}

	$scope.addItem = function() {
		$scope.items.push({text: $scope.newItem, bought: false, id: ($scope.items.length + 1) });
		$scope.newItem ='';
	}
	
	$scope.deleteItem = function(item) {
		var index = $scope.items.indexOf(item);
		$scope.items.splice(index,1);
	}

});