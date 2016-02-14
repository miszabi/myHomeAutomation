/**
 * Created by Miskolczy on 10/25/2015.
 */
appServices.service('dashboardService', function($http, $q, ENDPOINT_URI) {

  var reports = [];
  function getCurrentTemperature(){
    var deferred = $q.defer();

    $http.post(ENDPOINT_URI +'temperature')
      .then(function(result){
        //success
        deferred.resolve(result.data);
      }, function(error){
        //failed
        deferred.reject();
      });

    return deferred.promise;
  }
  return {
    getTemperature: getCurrentTemperature
  };
});
