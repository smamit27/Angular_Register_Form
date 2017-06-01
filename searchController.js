angular.module("AngularApp").controller( 'searchController',function($scope,$location,customer,tableData){
	
$scope.customers = customer.getcustomers();

$scope.removeRow = function(customerName){
	customer.removeCustomer(customerName);
	customer.getcustomers();
}

//$scope.orderByField = 'name';
//$scope.reverseSort = false;

tableData.then(function(data){
  $scope.config.myData=data;
});

$scope.config = {
	heads: ['name', 'age', 'company', 'tech']
};
 
});