function times(a, b) {
    if ( b == 1 ) {
        return a
    }

    if (is_even(b)) {
        return double(times(a, halve(b)))
    }

   return a + times(a, b-1);
}

function is_even(n) {
    return n % 2 === 0;
}

function double(n){
    return n+n;
}

function halve(n){
    return n/2;
}

console.log(times(2,10) == 20);
console.log(times(2,20) == 40);

