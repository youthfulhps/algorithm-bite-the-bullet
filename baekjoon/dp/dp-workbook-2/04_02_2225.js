const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const DIVIDER = 1_000_000_000;

function solution(inputs) {
  const [N, K] = inputs;

  const memo = Array.from({length: K}, () => Array(N + 1).fill(0));
  memo[0] = Array(N + 1).fill(1);

  for (let i = 1; i < K; i++) {
    memo[i][0] = 1;

    for (let j = 1; j <= N; j++) {
      for (let k = 0; k <= j; k++) {
        memo[i][j] += (memo[i - 1][k] % DIVIDER);
      }
    }
  }

  return memo[K - 1][N] % DIVIDER;
}

console.log(solution(inputs));
