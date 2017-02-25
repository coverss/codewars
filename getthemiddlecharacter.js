function getMiddle(s)
{
 
  if ( s.length%2 === 0) {
    return s.substring((s.length - 1)/2, (s.length+2)/2);
 }
  else {
    return s.substring((s.length-1)/2, (s.length+1)/2);
    }
  
    
}