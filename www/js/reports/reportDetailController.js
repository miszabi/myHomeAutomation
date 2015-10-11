/**
 * Created by Miskolczy on 10/11/2015.
 */

appController
  .controller('ReportDetailCtrl', function($scope, $stateParams, Reports) {
    $scope.reportDetails = Reports.get($stateParams.reportId);
  })
