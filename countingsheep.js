function countSheeps(arrayOfSheep) {
var cnt = 0;
  for (var i=0;i<arrayOfSheep.length;i++)
  {
    if (arrayOfSheep[i]){
      cnt++;
    }
  }
  return cnt;
  

}