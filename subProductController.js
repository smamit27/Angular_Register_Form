angular.module("AngularApp").controller( 'subProductCtrl',function($scope,$http,$location,productName){

	var product = productName.getProducts();
	
	$http.get('subProduct.json')
	.success(function(data){
		var subProductsNames = data.subProducts;

		for(var i = 0; i< subProductsNames.length; i++){

			if(subProductsNames[i].productName === product[0]){

				$scope.subProducts = subProductsNames[i];
			}
		}		
	});

	$scope.logout = function (){
		$location.path('/login');
	}

});