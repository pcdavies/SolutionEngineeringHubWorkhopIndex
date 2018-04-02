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

var app = angular.module('workshopApp',['ngSanitize','workshopServices']);

app.controller('workshopCtlr', function($scope, $http, $location, $timeout, workshopData ) {
    
  /*Query  .json*/
    $scope.workshop_data = workshopData.query(function(){
    console.log("Query the workshop.json");
    });
});
//end Controller