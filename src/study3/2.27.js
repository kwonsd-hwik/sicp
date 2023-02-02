import {head, tail, list, raw_display, display, pair, append, is_pair, is_null, stringify} from 'sicp';

function reverse(paramList) {
    return is_null(paramList) ? null : append(reverse(tail(paramList)), pair(head(paramList), null));
}

const x = list(list(1, 2), list(3, 4));

// display(x)

console.assert(stringify(reverse(x)) == stringify(list(list(3, 4), list(1, 2))))

function deep_reverse(items) {
    return is_null(items)
        ? items
        : is_pair(items)
            ? append(deep_reverse(tail(items)),
                pair(deep_reverse(head(items)),
                    null))
            : items;
}

console.assert(stringify(deep_reverse(x)) == stringify(list(list(4, 3), list(2, 1))))
