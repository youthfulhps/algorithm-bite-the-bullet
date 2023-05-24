// dp, 분할 정복이 가능한가, 중복된 연산이 존재하는가에 집중
// 어느 메모이제이션 인덱스에서 현재 위치로 넘어올 수 있는 지에 집중

const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  let N = Number(inputs);

  // 각각의 인덱스에서 1로 가는데 걸리는 수를 메모이제이션한다.
  const memo = [0, 0, 1, 1];

  for (let i = 4;i<=N;i++) {
    memo[i] = memo[i - 1];

    if (i % 3 === 0) {
      memo[i] = Math.min(memo[i], memo[Math.floor(i / 3)]);
    }

    if (i % 2 === 0) {
      memo[i] = Math.min(memo[i], memo[Math.floor(i / 2)]);
    }

    memo[i] += 1;
  }

  return memo[N];
}

console.log(solution(inputs));
