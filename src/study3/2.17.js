import { tail, list } from 'sicp';


function last_pair(paramList) {
    // console.log(paramList)
    return tail(paramList) == null ? paramList :last_pair(tail(paramList))
}

console.assert(last_pair(list(34)).join(',') === Array(34, null).join(','));
console.assert(last_pair(list(1,2,3,4,5)).join(',') === Array(5, null).join(','));

