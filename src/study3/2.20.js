import {head, tail, list, pair} from 'sicp';

function plus_curried(x) {
    return y => x + y;
}


// 1.
function brooks(plus_curried, lists) {
    return lists == null ? plus_curried : brooks(plus_curried(head(lists)), tail(lists))
}

// 2.
function brooks_curried(lists) {
    return brooks(head(lists), tail(lists));
}

console.assert(brooks_curried(list(brooks_curried,
    list(plus_curried, 3, 4))) == 7);

console.assert(brooks_curried(list(brooks_curried,
    list(brooks_curried,
        list(plus_curried, 3, 4)))) == 7);