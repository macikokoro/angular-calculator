'Use Strict';
//Mean=============================
var findMean = function (nums) {
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
}
return (sum / nums.length);
};

//Median=============================


var findMedian = function(nums) {
  var middle = Math.floor(nums.length / 2);

  if(nums.length % 2 === 0) {
    return ((nums[middle - 1] + nums[middle]) / 2);
  } else {
    return nums[middle];
  }
};


exports.mean = findMean;
exports.median = findMedian;
