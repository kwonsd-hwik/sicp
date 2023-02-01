import {head, tail, list, raw_display, display, pair, append, is_pair, is_null} from 'sicp';

function fringe(items) {
    return is_null(items) ? null : is_pair(items) ? append(fringe(head(items)), fringe(tail(items))) : list(items)
}

const x = list(list(1,2), list(3,4))
display(x)

display(fringe(x))
display(fringe(list(x, x)))