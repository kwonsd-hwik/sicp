import { head, tail, list, pair, raw_display, append, is_null } from 'sicp';


function reverse(paramList) {
    return is_null(paramList) ? null : append(reverse(tail(paramList)), pair(head(paramList), null));
}

console.assert(raw_display(reverse(list(1,2,3,4,5))) == "5,4,3,2,1,");
