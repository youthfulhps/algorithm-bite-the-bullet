const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const DIVIDER = 1000000000;

function solution(inputs) {
  const [N, K] = inputs;

  const memo = Array.from({length: K}, () => Array(N + 1).fill(0));
  memo[0] = Array(N + 1).fill(1 % DIVIDER);

  for (let i = 1; i < K; i++) {
    for (let j = 0; j <= N; j++) {
      memo[i][j] = memo[i - 1].slice(0, j + 1).reduce((sum ,curr) => sum + curr, 0) % DIVIDER;
    }
  }


  return memo[K - 1][N];
}

console.log(solution(inputs));
