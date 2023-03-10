import {head, tail, list, raw_display, display, pair, append, is_pair, is_null} from 'sicp';

function make_mobile(left, right) {
    return list(left, right);
}

const m = make_mobile(1,2);

function left_branch(m) {
    return head(m);
}

// solution a-1
console.assert(left_branch(m) == 1);

function right_branch(m) {
    return head(tail(m));
}

// solution a-2
console.assert(right_branch(m) == 2);


function make_branch(length, structure) {
    return list(length, structure);
}

const b = make_branch(2, 10)

function branch_length(item) {
    return head(item);
}

// solution a-3
console.assert(branch_length(b) == 2);

function branch_struct(item) {
    return head(tail(item));
}

// solution a-4
console.assert(branch_struct(b) == 10);


const leftBranch = make_branch(1, 10)
const rightBranch = make_branch(2, 24)

const mobile = make_mobile(leftBranch, rightBranch)

function total_weight(m) {
    return is_null(m) ? 0 : is_pair(m) ? total_weight(branch_struct(left_branch(m))) + total_weight(branch_struct(right_branch(m))) : m;
}

// solution b
console.assert(total_weight(mobile) == 34)

