function perimeter(n) {
    var a = 0;
    var b = 1;
    var sum = 0;
    for(var i = 0; i < n; i++){
      var f1 = a + b;
      a = b;
      b = f1;
      sum += f1;
    }
    return (sum + 1) * 4;
}