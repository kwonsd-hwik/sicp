import {head, tail, list, pair, is_null, map, display, stringify} from 'sicp';

function square_list1(items) {
    return is_null(items)
            ? null
        : pair(head(items)*head(items) , square_list1(tail(items)));
}

function square_list2(items) {
    return map( x => x *x, items)
}

console.assert(stringify(square_list1(list(1,2,3,4))) == stringify(list(1,4,9,16)))
console.assert(stringify(square_list2(list(1,2,3,4))) == stringify(list(1,4,9,16)))
