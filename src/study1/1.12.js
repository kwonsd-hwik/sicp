function pascal_triangle(row, index) {
    if (row === 1) {
        return 1;
    }

    if (index == 1) {
        return 1;
    }

    if (row == index) {
        return 1;
    }

    return pascal_triangle(row-1, index-1) + pascal_triangle(row-1, index);
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

assert(pascal_triangle(1, 1) == 1, new Error().stack);
assert(pascal_triangle(2, 1) == 1, new Error().stack);
assert(pascal_triangle(2, 2) == 1, new Error().stack);
assert(pascal_triangle(3, 1) == 1, new Error().stack);
assert(pascal_triangle(3, 2) == 2, new Error().stack);
assert(pascal_triangle(3, 3) == 1, new Error().stack);
assert(pascal_triangle(4, 1) == 1, new Error().stack);
assert(pascal_triangle(4, 2) == 3, new Error().stack);
assert(pascal_triangle(4, 3) == 3, new Error().stack);
assert(pascal_triangle(4, 4) == 1, new Error().stack);
assert(pascal_triangle(5, 1) == 1, new Error().stack);
assert(pascal_triangle(5, 2) == 4, new Error().stack);
assert(pascal_triangle(5, 3) == 6, new Error().stack);
assert(pascal_triangle(5, 4) == 4, new Error().stack);
assert(pascal_triangle(5, 5) == 1, new Error().stack);