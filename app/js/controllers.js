function SearchCtrl($scope, $resource) {
    $scope.sidbase = $resource('http://sidbase.6581.no/api/v1/:action',
			       {action:'tunes.json', 'name.like':'Offence',callback:'JSON_CALLBACK'},
			       {get:{method:'JSONP'}});

    $scope.doSearch = function () {
	$scope.result = $scope.sidbase.get({'name.like':$scope.searchTerm});
    }
}
