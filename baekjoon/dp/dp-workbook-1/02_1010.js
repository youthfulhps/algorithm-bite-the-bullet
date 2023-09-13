const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

// 조합 문제
// memo[n][r] = memo[n - 1][r - 1] + memo[n - 1][r];
// N개(강동쪽 사이트) 중 R개(강서쪽 사이트)를 뽑는 개념
// 메모이제이션은 N * N 배열로 구성

function solution(inputs) {
  const T = inputs.shift()[0];
  const answer = [];

  for (let t = 0; t < T; t++) {
    const [R, N] = inputs[t];

    const memo = Array.from({length: N + 1}, () => Array(N + 1).fill(0));

    memo[1][0] = 1n;
    memo[1][1] = 1n;

    for (let n = 2; n <= N; n++) {
      for (let r = 0; r <= N; r++) {
        if (r === 0 || r === n) {
          memo[n][r] = 1n;
          continue;
        }
        memo[n][r] = memo[n - 1][r] + memo[n - 1][r - 1];
      }
    }

    answer.push(memo[N][R]);
  }

  return answer;
}

console.log(solution(inputs).join('\n'));
