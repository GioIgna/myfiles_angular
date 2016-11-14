//definizione dei controller
app.controller('contr', function($scope) {
	$scope.run="HOME";
});

//definizione controller primi; utilizziamo Dependency Injection di angular
app.controller('primiContr', function($scope, $http) {
	$http.get('js/fileJson/pasta.json').success(function(data) {
		$scope.pasta=data;
		$scope.onePlus= function(index){
			data[index].like++;
		};
	});
});

//definizione controller secondi
app.controller('secondiContr', function($scope, $http) {
	$http.get('js/fileJson/secondi.json').success(function(data) {
		$scope.secondi=data;
		$scope.onePlus= function(index){
			data[index].like++;
		};
	});
});

//controller pollo o tacchino
app.controller('birdContr', function($scope, $http) {
	$http.get('js/fileJson/birds.json').success(function(data) {
		$scope.birds=data;
		$scope.onePlus= function(index){
			data[index].like++;
		};
	});
});

