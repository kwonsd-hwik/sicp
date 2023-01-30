import { tail, list, display , raw_display} from 'sicp';


function last_pair(paramList) {
    // console.log(paramList)
    return tail(paramList) == null ? paramList :last_pair(tail(paramList))
}

console.assert(raw_display(last_pair(list(34))) == "34,");
console.assert(raw_display(last_pair(list(1,2,3,4,5))) == "5,");

