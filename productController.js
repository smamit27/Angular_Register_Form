angular.module("AngularApp").controller( 'productCtrl',function($scope,$location,$rootScope,products,productName){
	
$scope.name = $rootScope.Name;



products.list(function(products) {
  	$scope.productlist = products.products;
});

$scope.logout = function (){
	$location.path('/login');
}

$scope.productClicked = function(productname){

	if(productName.getProducts().length > 0){		
		productName.removeProducts(productname);
	}	
	productName.addProduct(productname);
	$location.path('/subProduct');
}

$scope.checkboxcliked = function(){

	alert("Checkbox is enabled.");
}
});