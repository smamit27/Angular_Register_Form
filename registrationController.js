angular.module("AngularApp").controller( 'registrationCtrl',function($scope,$location,$rootScope,$uibModal,customer){
 
	$scope.submitMyForm = function(){
		var allUserData = $scope.user;
    customer.addCustomer(allUserData);

    var modalInstance = $uibModal.open({
      templateUrl: 'modal.html',
      controller: 'modalInstanceCtrl',
      resolve: {
        items: function () {
          return true;
        }
      }
    });

    reset();
  }

	$scope.about = function(){
		$location.path('/login');
	}

  $scope.proceedToSearch = function(){
    $location.path('/searchCustomer'); 
  }

  function reset(){
    $scope.user = "";
  }

});

angular.module('AngularApp').controller('modalInstanceCtrl', function ($scope, $uibModalInstance,$location) {
    $scope.ok = function () {
      $uibModalInstance.close();
      //$location.path('/login');
    };  
});