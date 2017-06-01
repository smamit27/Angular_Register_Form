angular.module("AngularApp").controller( 'loginCtrl',function($scope,$location,$rootScope,$http){

	$scope.showPassword = false;
	$scope.buttonName = "Next";
	$scope.registername = "Register";

	$scope.logIn = function(){

		if($scope.username != null && $scope.username !== undefined){
			$scope.showPassword = true;			
			$scope.buttonName = "Log In";			
			
			getImage($scope.username);

			if($scope.username !== undefined && $scope.password !== undefined 
				&& $scope.buttonName === "Log In"){
				$rootScope.loggedIn  =true;
				$rootScope.Name = $scope.username.toUpperCase();
				$location.path('/product');
			}						
		}
	}
	
	$scope.register = function() {
		$location.path('/registration');

	}

	function getImage(username){

		var imagURL = null;
		$http.get('http://127.0.0.1:8080/data/json/image.json')
		.success(function(data){
			
				if(data !== null && data !== undefined){
					
					for(var i =0; i< data.images.length; i++){
						
						if(data.images[i].name === username){

							imagURL = data.images[i].imageName;
							break;
						}
					}
				}
			if(imagURL == null){
				imagURL = "loginFirst.png";
			}
			
			$scope.imageUrl = path+imagURL ;	
		});		
	}

});