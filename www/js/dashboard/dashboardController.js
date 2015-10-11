/**
 * Created by Miskolczy on 10/11/2015.
 */

appController
  .controller('DashCtrl', function($scope, $timeout) {

    $scope.dashboard = {
      tempSettings: {
        type: 'temperature',
        title: 'temperature',
        currentTemperature: 22,
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

    var lightCounterTimeout;
    $scope.onTimeOut = function(){
      $scope.dashboard.lightSettings.turnOffIn--;
      lightCounterTimeout = $timeout($scope.onTimeOut, 1000)
      if($scope.dashboard.lightSettings.turnOffIn == 0){
        $timeout.cancel(lightCounterTimeout)
        $scope.dashboard.lightSettings.turnOffIn = 60;
      }
    }

    $scope.onTimeOut();
  });
