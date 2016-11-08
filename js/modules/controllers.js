test.controller('filterCtrl', function($scope) {

$scope.defaultFilter = {
	colors: {
		name: 'colors',
		type: 'check',
		points : {
			1: {title: 'all',	isDefault : true},
			2: {title: 'red', isDefault : false	},
			3: {title: 'blue', isDefault : false	}
		}
	},
	age: {	
		name: 'age',
		type: 'radio',
		points : {
			1: {title: '6+', isDefault : true, bindPoints: [2,3,4]},
			2: {title: '14+', isDefault : false, bindPoints: [3,4]},
			3: {title: '16+', isDefault : false, bindPoints: [4]},
			4: {title: '18+', isDefault : false, bindPoints: []},

		}
	},
	brand: {
		name: 'brands',
		type: 'check',
		points : {
			1: {title: 'LaCosta', isDefault : false},
			2: {title: 'Nike',	isDefault : false},
			3: {title: 'Addidas', isDefault : false}
		}
	}		
};

$scope.usedFilter = {}; // fills with user's filter manipulation

$scope.items = [
	{
		colors: [2, 3],
		age: [3],
		brand: [1, 2, 3]
	},
	{
		colors: [2],
		age: [1],
		brand: [3]
	},
	{
		colors: [2],
		age: [2],
		brand: [1, 3]
	},
		{
		colors: [2],
		age: [3],
		brand: [2]
	},
		{
		colors: [3],
		age: [4],
		brand: [1, 2]
	}
];

$scope.clickFilter = function(filterKey, pointKey, usedFilter) {

	if ($scope.defaultFilter[filterKey].type == 'radio') {
		$scope.usedFilter[filterKey] = {};
	}

	if ($scope.defaultFilter[filterKey].type == 'check') {
		if (!$scope.usedFilter[filterKey]) {
			$scope.usedFilter[filterKey] = {};
		}
	} 

	if ($scope.usedFilter[filterKey][pointKey] !== $scope.defaultFilter[filterKey].points[pointKey].isDefault) {
		if (!$scope.usedFilter[filterKey][pointKey] && !$scope.defaultFilter[filterKey].points[pointKey].isDefault) {
			$scope.usedFilter[filterKey][pointKey] = true;
		} else {
			delete $scope.usedFilter[filterKey][pointKey];
			if (Object.keys($scope.usedFilter[filterKey]).length == 0) {
				delete $scope.usedFilter[filterKey];
			}
		}
	}
};

$scope.showClearButton = function() {
		return (Object.keys($scope.usedFilter).length != 0);
}



}); //end of filterCtrl
