import {head, tail, list, raw_display, display, pair, append, is_pair, is_null} from 'sicp';

function scale_tree(tree, factor) {
    return is_null(tree)
        ? null
        : !is_pair(tree)
            ? tree * factor
            : pair(scale_tree(head(tree), factor),
                   scale_tree(tail(tree), factor));
}

display(scale_tree(list(1, list(3, list(3,4), 5), list(6,7)), 10));