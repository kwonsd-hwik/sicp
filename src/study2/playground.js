function integral(f, a, b, dx) {
    function add_dx(x){
        return x+dx;
    }
    return sum(f, a+dx/2, add_dx, b) * dx;
}

function sum(term, a, next, b) {
    return a > b
            ? 0
            : term(a) + sum(term, next(a), next, b);
}

function cube(x) {
    return x*x*x;
}

console.log(integral(cube, 0, 1, 0.01))
// 0.24998750000000042

console.log(integral(cube, 0, 1, 0.001))
// 0.249999875000001

console.log(sum(x=>x, 0, x=>x+1, 10))