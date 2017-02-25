function humanReadable(seconds) {
  var a = Math.floor(seconds/3600);
  var b = Math.floor((seconds % 3600) / 60);
  var c = Math.floor((seconds % 3600) % 60);
  if (a < 10)
    var s = "0" + a + ":";
  else 
    var s = a + ":";
  if (b < 10)
    var z = "0" + b + ":";
  else 
    var z = b + ":";
  if (c < 10)
    var x = "0" + c;
  else 
    var x = c;
    
    return s + z + x;
}