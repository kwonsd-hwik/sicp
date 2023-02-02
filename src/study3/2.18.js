import { head, tail, list, pair, display, append, is_null, stringify } from 'sicp';


function reverse(paramList) {
    return is_null(paramList) ? null : append(reverse(tail(paramList)), pair(head(paramList), null));
}

console.assert(stringify(reverse(list(1,2,3,4,5))) == stringify(list(5,4,3,2,1)));
