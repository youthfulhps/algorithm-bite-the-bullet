const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [N, K] = inputs.shift();
  const memo = Array.from({length: N + 1}, () => Array(K + 1).fill(0));

  for (let k = 0; k <= K; k++) {
     for (let n = 1; n <= N; n++) {
      const [weight, value] = inputs[n - 1];

      if (weight > k) {
        memo[n][k] = memo[n - 1][k];
      } else {
        memo[n][k] = Math.max(memo[n - 1][k], memo[n - 1][k - weight] + value);
      }
    }
  }

  return memo[N][K];
}

console.log(solution(inputs));
