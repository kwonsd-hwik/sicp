import { tail, list, stringify } from 'sicp';


function last_pair(paramList) {
    // console.log(paramList)
    return tail(paramList) == null ? paramList :last_pair(tail(paramList))
}

console.assert(stringify(last_pair(list(34))) == stringify(list(34)));
console.assert(stringify(last_pair(list(1,2,3,4,5))) == stringify(list(5)));

