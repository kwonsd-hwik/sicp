function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : elase_clause;
}

conditional(2 === 3, 0, 5)
// result : 5

conditional(1 == 1, 0, 5)
// result : 0


function sqrt_iter(guess, x) {
    return conditional(is_good_enough(guess, x),
        guess,
        sqrt_iter(improve(guess, x),
            x));
}

// 이 함수로 제곱근을 계산하면 어떤 일이 생기는지 설명하라.


/*
sqrt_iter(5, 1)

=>
conditional(is_good_enough(5, 1),
             5,
             sqrt_iter(improve(5, 1),
                                    1));

=>
conditional(is_good_enough(5, 1),
             5,
             sqrt_iter(improve(5, 1), <= 이부분을 다시 재귀호출하면서 무한 루프에 빠진다.
                                    1));

 */