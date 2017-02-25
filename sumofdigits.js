function digital_root(n) {
  if(n === 0) 
    return 0
  else {
  while(n > 9) {
    var str = n.toString();
    var sum = 0;
    
    for(var i = 0; i< str.length; i++) {
      sum += parseInt(str[i]);
    }
    n = sum;
  }
}
  return sum;

}