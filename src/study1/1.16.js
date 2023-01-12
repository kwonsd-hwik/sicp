function fast_expt(b, n) {
    return iter_fast_expt(1, b, n)
}

function iter_fast_expt(a, b, n) {
   if ( n==0 ) {
        return a;
    }

     if (is_event(n)) {
         return iter_fast_expt(a, b*b, n/2)
     }

    return iter_fast_expt(a*b, b, n-1)
}

function is_event(n){
    return n%2 == 0;
}

console.log(fast_expt(2,10) == 1024)
