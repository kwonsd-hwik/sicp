function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
}

// 인수 우선평가 방식과 정상순서 평가 방식의이 어떤 식으로 평가되는지 서술하라

/*
applicative-order evaulation(인수 우선 평가)
test(0, p())
test(0, p(p()))
test(0, p(p(p())))
// 인수 값을 계산하기 위하여 재귀호출로 함수를 호출하면서 무한 루프에 빠진다.


normal-order evaulation(정상순서 평가)
x === 0 ? 0 : p()
0

// x == 0여서 p()함수는 수행하지 않는다.

 */