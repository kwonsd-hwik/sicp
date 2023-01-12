function is_even(n) {
    return n % 2 == 0
}

function fast_expt(b, n) {
    if ( n == 0 ) {
        console.log("1*")
        return 1
    }

    if (is_even(n)) {
        console.log("[INFO] n=" + n/2)
        return square(fast_expt(b, n/2))
    }

    console.log(b +"*")
    return b * fast_expt(b, n-1)
}

function square(n){
    console.log(n + "*" + n)
    return n*n
}

console.log(fast_expt(2,10) == 1024)