/**
 * Created by Miskolczy on 10/11/2015.
 */

appController
  .controller('DashboardCtrl', function($scope, $timeout, dashboardService, heaterService) {


    function getDashboarData(){

      $scope.dashboard = {
        tempSettings: {
          type: 'temperature',
          title: 'temperature',

          isON: true,
          runningTime: 35
        },
        lightSettings: {
          type: 'light',
          title: 'light',
          isOn: true,
          turnOffIn: 60
        },
        cameraSettings: {
          type: 'camera',

          cameraOne: {
            title: 'camera',
            isOn: true,
            runningTime: 20
          }
        }
      };
      $scope.dashboard.lightSettings.turnOffIn = 60;

      dashboardService.getTemperature().then(function(result){
        $scope.dashboard.tempSettings.currentTemperature = result.data.Value
      },
      function(err){
        console.log(err);
      });

      heaterService.isHeaterOn().then(function(result){
        if(result.data.success){
          $scope.dashboard.tempSettings.isON = result.data.result == 0 ? false : true;
        }
      }, function (err){
          console.log(err);
      });
    }

    var lightCounterTimeout;
    $scope.onTimeOut = function(){
      $scope.dashboard.lightSettings.turnOffIn--;
      lightCounterTimeout = $timeout($scope.onTimeOut, 1000)
      if($scope.dashboard.lightSettings.turnOffIn == 0){
        $timeout.cancel(lightCounterTimeout)
        $scope.dashboard.lightSettings.turnOffIn = 60;
      }
    }

    $scope.heaterStatusChange = function (dashboard){
      console.log(dashboard);
      if(dashboard.tempSettings.isON){
        heaterService.heatOn().then(function(result){
          if(result.data.success){
            $scope.dashboard.tempSettings.isON = true;
          }
        }, function(err){
          console.log(err);
        });

      }
      else{
        heaterService.heatOff().then(function(result){
          if(result.data.success){
            $scope.dashboard.tempSettings.isON = false;
          }
        }, function(err){
          console.log(err);
        });
      }
    }

    getDashboarData();
  });
