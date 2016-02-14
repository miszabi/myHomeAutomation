var appServices = angular.module('home-automation-app.services',[])

appServices.service('LoginService', function($http, $q, ENDPOINT_URI) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();

            $http.post(ENDPOINT_URI+'authenticate', {user : name, password : pw})
              .then(function(result){
                //success
                deferred.resolve(result);
              }, function(){
                //error
                deferred.reject();
            });

          return deferred.promise;
        }
    }
});

