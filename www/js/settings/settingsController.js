/**
 * Created by Miskolczy on 12/6/2015.
 */
appController
  .controller('SettingsCtrl', function($scope, $stateParams, $timeout, settingsService) {

      $scope.settings = {};
console.log($stateParams);
      $scope.getSetting = function (dayId){
        settingsService.getSettings(dayId)
          .then(function(result){
            $scope.settings.program = result.data;
          },
          function(err){
          //handle error
        });
      }
  });
