function accum(s) {
  var res = "";
	for(var i = 0; i < s.length; i++){
    for(var j = 1; j <= i + 1; j++){
      if(j === 1) res += s[i].toUpperCase();
      else res += s[i].toLowerCase();
    }
    if(i !== s.length - 1) res += "-";
   }
   
   return res;
}