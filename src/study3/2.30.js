import {head, tail, list, raw_display, display, pair, map, is_pair, is_null, stringify} from 'sicp';

function scale_tree(tree, factor) {
    return is_null(tree)
        ? null
        : !is_pair(tree)
            ? tree * factor
            : pair(scale_tree(head(tree), factor),
                scale_tree(tail(tree), factor));
}

// display(scale_tree(list(1, list(3, list(3, 4), 5), list(6, 7)), 10));
// output : [10, [[30, [[30, [40, null]], [50, null]]], [[60, [70, null]], null]]]

function square_tree(tree) {
    return is_null(tree)
        ? null
        : is_pair(tree)
            ? pair(square_tree(head(tree)),
                square_tree(tail(tree)))
            : tree * tree;
}

const l = list(1,
    list(2, list(3, 4), 5),
    list(6, 7))

console.assert(stringify(square_tree(l)) == stringify(list(1, list(4, list(9, 16), 25), list(36, 49))))


function square_tree_map(tree) {
    display(tree)
    return map(x => is_pair(x)? square_tree_map(x) : x*x, tree);
}


console.assert(stringify(square_tree_map(l)) == stringify(list(1, list(4, list(9, 16), 25), list(36, 49))))