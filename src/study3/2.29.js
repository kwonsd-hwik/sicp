import {head, tail, list, raw_display, display, pair, append, is_pair, is_null} from 'sicp';

function make_mobile(left, right) {
    return list(left, right);
}

var m = make_mobile(1,2);

function left_branch(m) {
    return head(m);
}

// solution a-1
console.assert(raw_display(left_branch(m)) == 1);

function right_branch(m) {
    return head(tail(m));
}

// solution a-2
console.assert(raw_display(right_branch(m)) == 2);


function make_branch(length, structure) {
    return list(length, structure);
}

var b = make_branch(2, 10)

function branch_length(item) {
    return head(item);
}

// solution a-3
console.assert(raw_display(branch_length(b)) == 2);

function branch_struct(item) {
    return head(tail(item));
}

// solution a-4
console.assert(raw_display(branch_struct(b)) == 10);


var leftBranch = make_branch(1, 10)
var rightBranch = make_branch(2, 24)

var mobile = make_mobile(leftBranch, rightBranch)
display(mobile)

function total_weight(m) {
    return is_null(m) ? 0 : is_pair(m) ? total_weight(branch_struct(left_branch(m))) + total_weight(branch_struct(right_branch(m))) : m;
}

// solution b
console.assert(raw_display(total_weight(mobile)) == 34)

