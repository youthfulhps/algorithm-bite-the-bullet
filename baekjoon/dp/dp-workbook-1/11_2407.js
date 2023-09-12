const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(inputs) {
  const [N, R] = inputs;
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

  return memo[N][R].toString();
}

console.log(solution(inputs));
