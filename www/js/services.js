angular.module('home-automation-app.services', [])

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.factory('Reports', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var reports = [{
    id: 0,
    creationDate : new Date().toDateString(),
    minTemperature: 20,
    maxTemperature: 24,
    averageTemperature : 22
  }, {
    id: 1,
    creationDate : new Date().toDateString(),
    minTemperature: 20,
    maxTemperature: 24,
    averageTemperature : 22
  }, {
    id: 2,
    creationDate : new Date().toDateString(),
    minTemperature: 20,
    maxTemperature: 24,
    averageTemperature : 22
  }, {
    id: 3,
    creationDate : new Date().toDateString(),
    minTemperature: 20,
    maxTemperature: 24,
    averageTemperature : 22
  }, {
    id: 4,
    creationDate : new Date().toDateString(),
    minTemperature: 20,
    maxTemperature: 24,
    averageTemperature : 22
  }],
    reportDetails = [{
      id: 1,
      reportId : 1,
      creationDate : new Date().toDateString(),
      temperature : 22
    },
    {
      id: 2,
      reportId : 1,
      creationDate : new Date().toDateString(),
      temperature : 22
    },
    {
      id: 3,
      reportId : 1,
      creationDate : new Date().toDateString(),
      temperature : 22
    },
    {
      id: 3,
      reportId : 1,
      creationDate : new Date().toDateString(),
      temperature : 22
    }
    ];


  return {
    all: function() {
      return reports;
    },
    remove: function(report) {
      reports.splice(reports.indexOf(report), 1);
    },
    get: function(reportId) {
      for (var i = 0; i < reportDetails.length; i++) {
        if (reportDetails[i].parentId === parseInt(reportId, 10)) {
          return reportDetails[i];
        }
      }
      return null;
    }
  };
});
