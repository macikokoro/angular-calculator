function StartupController($scope) {

  var numArray = [1, 2, 3, 4, 5];

  //Mean=============================
  var findMean = function (numArray) {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
      sum += numArray[i];
  }
  return (sum / numArray.length);
  };

  //Median=============================
  numArray.sort(function(a, b) { return a - b; });

  var findMedian = function(numArray) {
    var middle = Math.floor(numArray.length / 2);

    if(numArray.length % 2 === 0) {
      return ((numArray[middle - 1] + numArray[middle]) / 2);
    } else {
      return numArray[middle];
    }
  };

  //Mode=============================
  var findMode = function (numArray) {
  var counter = [];
  var mode = [];
  var max = 0;
    for (var i in numArray) {
      if (counter[numArray[i]] === undefined)
          counter[numArray[i]] = 0;
          counter[numArray[i]]++;

      if (counter[numArray[i]] == max) {
          mode.push(numArray[i]);
      }
      if (counter[numArray[i]] > max) {
          max = counter[numArray[i]];
          mode = [numArray[i]];
      }
    }
  return mode;
  }

  //TheAngularMagic======================
  $scope.calculate = { resultmean: 0, resultmedian: 0, resultmode: 0, dailycount: 0, allresults: 0 };

  var computeMean = function() {
    $scope.calculate.resultmean = $scope.calculate.mean = findMean(numArray);
  };

  var computeMedian = function() {
    $scope.calculate.resultmedian = $scope.calculate.median = findMedian(numArray);
  };

  var computeMode = function() {
    $scope.calculate.resultmode = $scope.calculate.mode = findMode(numArray).join();
  };

  $scope.$watch('calculate.mean', computeMean);
  $scope.$watch('calculate.median', computeMedian);
  $scope.$watch('calculate.mode', computeMode);

}

function TextController($scope){
  $scope.someText = "Meeny Miny Mode Calculator";
}
