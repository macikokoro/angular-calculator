function StartupController($scope) {
  $scope.computeMean = function() {
    var numbers = calculate.mean.split(' ').map(Number);
  };

    //Mean=============================
    var findMean = function (numbers) {
      var sum = 0;
      for (var i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return (sum / numArray.length);
    };

    //TheAngularMagic======================
  $scope.calculate = { resultmean: 0, mean: 0 };

  var computeMean = function() {
    $scope.calculate.resultmean = $scope.calculate.mean * 2;
  };

  $scope.$watch('calculate.mean', computeMean);

}

function TextController($scope){
  $scope.someText = "Meeny Miny Mode Calculator";
}
