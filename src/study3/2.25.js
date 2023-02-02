import {head, tail, list, raw_display, display} from 'sicp';


var l = list(1, 3, list(5, 7), 9)
console.assert(head(tail(head(tail(tail(l))))) == 7)

l = list(list(7))
console.assert( head(head(l)) == 7)

l = list(1, list(2, list(3, list(4, list(5, list(6,7))))))
console.assert((head(tail(head(tail(head(tail(head(tail(head(tail(head(tail(l))))))))))))) == 7)



