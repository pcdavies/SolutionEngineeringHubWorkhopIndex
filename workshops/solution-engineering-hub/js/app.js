//Angular code to power the workshop page
var workshopServices = angular.module('workshopServices', ['ngResource']);
//Add JSON accessors---factory

/*Service to get the workshop info*/
workshopServices.factory('workshopData', ['$resource',
 function($resource){
    return $resource('js/workshop.json', {}, {
      query: {method:'GET', params:{}, isArray:false}
    });
  }]);
  
/*Service to get the digital_demo info*/
workshopServices.factory('digitalDemoData', ['$resource',
 function($resource){
    return $resource('js/digital_demos.json', {}, {
      query: {method:'GET', params:{}, isArray:false}
    });
  }]);

var app = angular.module('workshopApp',['ngSanitize','workshopServices']);

app.controller('workshopCtlr', function($scope, $http, $location, $timeout, workshopData, digitalDemoData ) {
  

   var url = $location.search();
   console.log("Digital Demo ID is: " + url.toString());
    
  /*Query  workshop.json*/
    $scope.workshop_data = workshopData.query(function(){
    console.log("Query the workshop.json");
    });
    
  /*Query  digitaldemo.json*/
    $scope.digitaldemo_data = digitalDemoData.query(function(){
    console.log("Query the digital_demo.json");
    });    
    
/*function to handle empty links*/
   $scope.showLink = function(url){
    if(url == '' || url == null) {
    return false;
    }
    else {
        return true;
    }
    }

});
//end Controller


