function findOdd(A) {
  var res = 0, cnt = 0;
   for (var i=0; i<A.length; i++){
     for (var j=0; j<A.length; j++){
       if (A[j] === A[i]) {
         cnt++;
       }
     }
     if (cnt % 2 !== 0 || cnt === 1) {
         res = A[i];
         break;
     }
    cnt = 0;
  }
  return res;
}