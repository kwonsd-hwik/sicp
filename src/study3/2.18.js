import { head, tail, list, pair, raw_display } from 'sicp';


function reverse(paramList) {
    return paramList == null ? paramList : pair(reverse(tail(paramList)), head(paramList));
}

console.assert(raw_display(reverse(list(1,2,3,4,5))) == ",5,4,3,2,1");
