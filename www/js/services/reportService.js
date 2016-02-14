/**
 * Created by Miskolczy on 10/24/2015.
 */

appServices.service('Reports', function($http, $q, ENDPOINT_URI) {

    var reports = [];
    function getReports(filter){
        var deferred = $q.defer();
        if(filter == 'undefined'){
          filter = new Date();
        }
        $http.post(ENDPOINT_URI +'temperatures', {date : filter})
          .then(function(result){
            //success
            deferred.resolve(result);
          }, function(error){
            //failed
            deferred.reject();
          });

      return deferred.promise;
    }

    function buildReportData(){

    }


    return {
      getReports: getReports
    };
});
