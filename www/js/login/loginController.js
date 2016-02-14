appController
  .controller('LoginCtrl', function($scope, $window, LoginService, $ionicPopup, $state) {

    function showAlert(){
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    }

    $scope.data = {};
    $scope.login = function() {
      LoginService.loginUser($scope.data.username, $scope.data.password).then(function(response) {

        if(response.data.success == 1){
          $window.Storage.token = response.data.token;
          $state.go('tab.dash');
        }
        else {
          showAlert();
        }
      }, function(data) {
          showAlert();
      });
    }
  });

