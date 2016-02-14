/**
 * Created by Miskolczy on 2/13/2016.
 */
appServices.service('heaterService', function($http, $q, ENDPOINT_URI) {

  function runningTime(){

  };

  function isHeaterOn(){
    var deferred = $q.defer();

    $http.get(ENDPOINT_URI +'heaterStatus')
      .then(function(result){
        //success
        deferred.resolve(result);
      }, function(error){
        //failed
        deferred.reject();
      });

    return deferred.promise;
  };

  function heaterOn(){
    var deferred = $q.defer();

    $http.get(ENDPOINT_URI +'heaterOn')
      .then(function(result){
        //success
        deferred.resolve(result);
      }, function(error){
        //failed
        deferred.reject();
      });

    return deferred.promise;
  };

  function heaterOff(){
    var deferred = $q.defer();

    $http.get(ENDPOINT_URI +'heaterOff')
      .then(function(result){
        //success
        deferred.resolve(result);
      }, function(error){
        //failed
        deferred.reject();
      });

    return deferred.promise;
  }

  return {
    isHeaterOn: isHeaterOn,
    heatOn : heaterOn,
    heatOff: heaterOff
  };
});
