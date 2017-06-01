angular.module("AngularApp").factory('products', function($http){
        return {
          list: function(callback){
            $http.get('product.json').success(callback);
        }
    };
});

angular.module("AngularApp").factory('productName', function(){

  var productList = [];

  var addProduct = function(newObj) {
      productList.push(newObj);
  };

  var getProducts = function(){
      return productList;
  };

  var removeProducts = function(newObj) {
      productList.pop(newObj);
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts,
    removeProducts : removeProducts
  };

});

angular.module("AngularApp").factory('customer', function(){

  var customerList = [];

  var addCustomer = function(newObj) {
      customerList.push(newObj);
  };

  var getcustomers = function(){
      return customerList;
  };

  var getPerticularcustomer = function(searchtext){
      return customerList;
  };

  var removeCustomer = function(removeObj) {
    var index = -1;       
    for( var i = 0; i < customerList.length; i++ ) {
      if( customerList[i].name === removeObj ) {
        index = i;
        break;
      }
    }
    if( index === -1 ) {
      alert( "Something gone wrong" );
    }
        
    customerList.splice( index, 1 );
  };

  return {
    addCustomer: addCustomer,
    getcustomers: getcustomers,
    removeCustomer : removeCustomer,
    getPerticularcustomer : getPerticularcustomer
  };

});


angular.module("AngularApp").factory("tableData",function($http,$q){
  
this.tableData=[];
var self=this;
var defer=$q.defer();
$http.get("tableData.json").success(function(data){
  var tableData=data.myData;
  defer.resolve(tableData);
})
return defer.promise;
});