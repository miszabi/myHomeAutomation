/**
 * Created by Miskolczy on 10/11/2015.
 */

appController.controller('ReportsCtrl', function($scope, Reports) {

  $scope.reports = Reports.all();

    $scope.remove = function(report) {
        Reports.remove(report);
    };
})
