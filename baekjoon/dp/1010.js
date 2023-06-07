const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

// 조합 문제
function solution(inputs) {
  const T = inputs.shift()[0];
  const result = [];

  for (let i =0; i<T;i++) {
    const [R, N] = inputs.shift();
    const memo = Array.from({length: N +1}, () => Array(N + 1).fill(0));

    memo[1][0] = 1n;
    memo[1][1] = 1n;

    for (let n = 2; n<=N;n++) {
      for (let r = 0; r<=N; r++) {
        if (r === 0 || n === r) {
          memo[n][r] = 1n;
          continue;
        }

        memo[n][r] = memo[n -1][r - 1] + memo[n - 1][r];
      }
    }

    result.push(memo[N][R]);
  }

  return result;
}

solution(inputs).forEach(result => console.log(result.toString()));

