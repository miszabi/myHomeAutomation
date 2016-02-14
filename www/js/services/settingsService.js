/**
 * Created by Miskolczy on 12/6/2015.
 */
appServices.service('settingsService', function($http, $q, ENDPOINT_URI){

  var settings = [];

  var methods = {
      getSettings : function(dayId){
        var deferred = $q.defer();

        deferred.resolve(
          [{
            FromHour : new Date(),
            ToHour : new Date(),
            Temperature : 23,
            DayId : 1
          },
            {
              FromHour : new Date(),
              ToHour : new Date(),
              Temperature : 23,
              DayId : 1
            }
          ]);

        return deferred.promise;
      },
      getSetting : function(id){
        var deferred = $q.defer();

        deferred.resolve(
         {
            FromHour : new Date(),
            ToHour : new Date(),
            Temperature : 23,
            DayId : 1
          });

        return deferred.promise;
      }
  };

  return {
    getSettings : methods.getSettings,
    getSetting : methods.getSetting
  }
});
