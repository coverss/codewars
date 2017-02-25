var maxSequence = function(arr){
  var curMax = 0;
  var max = 0;
  for(var i = 0; i < arr.length; i++ ){
    curMax = Math.max(0, curMax + arr[i]);
    max = Math.max(max, curMax);
  }
  return max;
}