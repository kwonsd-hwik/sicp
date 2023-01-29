function pair(x, y) {
    return m => m(x,y);
}

function head(z) {
    return z((p, q) => p);
}

console.log(head(pair(3,2)))
// result : 3