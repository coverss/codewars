function repeatStr (n, s) {

   var result = '', i;

    for (i = 1; i <= n; i *= 2) {
        if ((n & i) === i) {
            result += s;
        }
        s = s + s;
    }

    return result;
}