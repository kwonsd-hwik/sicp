import {head, tail, list, raw_display, display, pair, append, is_pair, is_null} from 'sicp';

function reverse(paramList) {
    return is_null(paramList) ? null : append(reverse(tail(paramList)), pair(head(paramList), null));
}

const x = list(list(1, 2), list(3, 4));

// display(x)

display(reverse(x))

function deep_reverse(items) {
    return is_null(items)
        ? items
        : is_pair(items)
            ? append(deep_reverse(tail(items)),
                pair(deep_reverse(head(items)),
                    null))
            : items;
}

display(deep_reverse(x))
