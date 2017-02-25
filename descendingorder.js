function descendingOrder(n){
    var d = n.toString();
    return parseInt(d.split("").sort(function(a,b){return b-a}).join(""));
    
}