const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const map = inputs;
  const memo = Array.from({length: N}, () => Array(N).fill(0n));
  memo[0][0] = 1n;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (map[x][y] === 0) {
        continue;
      }

      const step = map[x][y];

      if (x + step < N) {
        memo[x + step][y] += memo[x][y];
      }

      if (y + step < N) {
        memo[x][y + step] += memo[x][y];
      }
    }
  }

  return memo[N - 1][N - 1].toString();
}

console.log(solution(inputs));
