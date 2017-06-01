var myApp = angular.module('AngularApp',['ngRoute','ui.bootstrap']);

myApp.config(function($routeProvider,$locationProvider){

	$routeProvider
	.when('/login',{
		templateUrl : 'login.html',
		controller  : 'loginCtrl'
	})
	.when('/product',{
		templateUrl : 'product.html',
		controller : 'productCtrl'
	})	
	.when('/registration',{
		templateUrl : 'registration.html',
		controller  :  'registrationCtrl'
	})
	.when('/subProduct',{
		templateUrl : 'subProduct.html',
		controller  : 'subProductCtrl'
	})
	.when('/searchCustomer',{
		templateUrl : 'searchCustomers.html',
		controller  :  'searchController'
	})
	.otherwise({
		redirectTo :'/login'
	});
});
