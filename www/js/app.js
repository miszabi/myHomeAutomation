angular.module('home-automation-app', ['ionic', 'home-automation-app.controllers', 'home-automation-app.services', "chart.js"])
  .constant('ENDPOINT_URI', 'http://localhost:3001/api/')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login/index.html',
      controller: 'LoginCtrl'
  })

    .state('setting', {
      url: '/setting',
      templateUrl: 'templates/settings/index.html',
      abstract: true//,
      //controller : 'SettingsCtrl'
  })

    .state('setting.temperature', {
      url: '/temperature',
      views : {
        'setting-temperature' : {
          templateUrl : 'templates/settings/setting-temperature.html',
          controller : 'SettingsCtrl'
        }
      }
    })

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashboardCtrl'
      }
    }
  })

  .state('tab.heater', {
    url: '/heater',
    views: {
      'tab-dash': {
        templateUrl: 'templates/heater/actions.html',
        controller: 'DashboardCtrl'
      }
    }
  })

  .state('tab.reports', {
      url: '/reports',
      cache: false,
      views: {
        'tab-reports': {
          templateUrl: 'templates/tab-reports.html',
          controller: 'ReportsCtrl'
        }
      }
    })
    .state('tab.report-detail', {
      url: '/reports/:reportId',
      views: {
        'tab-reports': {
          templateUrl: 'templates/report-detail.html',
          controller: 'ReportDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

    $httpProvider.interceptors.push(['$q', '$location', '$window', function($q, $location, $window) {
      return {
        'request': function (config) {
          config.headers = config.headers || {};

          if ($window.Storage.token) {
            config.headers['x-access-token'] = $window.Storage.token;
          }

          return config;
        },
        'responseError': function(response) {
          if(response.status === 401 || response.status === 403) {
            $location.path('/login');
          }
          return $q.reject(response);
        }
      };
    }]);
  });
