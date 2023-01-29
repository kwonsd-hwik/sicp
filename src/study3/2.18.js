import { head, tail, list, pair, is_null, append } from 'sicp';


function reverse(paramList) {
    return paramList == null ? paramList : pair(reverse(tail(paramList)), head(paramList));
}

console.assert(reverse(list(1,2,3,4,5)).join(',') === Array(null,5,4,3,2,1).join(','));
