/**
 * Created by Miskolczy on 10/11/2015.
 */

appController.controller('ReportsCtrl', function($scope, $filter, $timeout, Reports) {

    $scope.viewModel = {
      series : [],
      labels : [],
      data : [[], [], []],
      filterDate : new Date(),
      reports : []
    };

    $scope.filterChanged = function(filterDate){
      getReports(filterDate);
      $scope.viewModel.filterDate = new Date(filterDate);
    };

  function getReports(date) {
    Reports.getReports(date).then(function(result){
      // max hour
      // make an array with a length with max hour from r


      $scope.viewModel.reports = result.data.data;
      buildChartData();
    }, function(error){
      ///TODO handle error
    });
  }

  getReports($scope.viewModel.filterDate);

  function buildChartData(){
      $scope.viewModel.labels = [];

      $scope.viewModel.reports.forEach(function(obj, idx){

        ///todo check why not work if in one or more hours not reported temperature

        $scope.viewModel.labels.push(''+ obj.Hour + '');
        $scope.viewModel.data[0][obj.Hour] = obj.maximumValue;
        $scope.viewModel.data[1][obj.Hour] = obj.minimumValue;
        $scope.viewModel.data[2][obj.Hour] = obj.averageValue;
      });

      for (var i = 0; i < $scope.viewModel.data[0].length; i++) {
        
              var current = $scope.viewModel.data[0][i];
              if(current == undefined){
                $scope.viewModel.data[0][i] = 22;
                $scope.viewModel.data[1][i] = 22;
                $scope.viewModel.data[2][i] = 22;
            }
      };


    $scope.viewModel.series = ['Max temperature ', 'Min temperature', 'Average temperature'];
  }
});
