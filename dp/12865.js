const inputs = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = inputs
  .shift()
  .split(" ")
  .map((i) => Number(i));

function solution(inputs) {
  inputs = inputs.map((input) => input.split(" ").map((i) => Number(i)));

  const memo = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));
  inputs.unshift(undefined);

  for (let n = 1; n <= N; n++) {
    const [weight, value] = inputs[n];
    for (let k = 0; k <= K; k++) {
      if (k < weight) {
        memo[n][k] = memo[n - 1][k];
      } else {
        memo[n][k] = Math.max(memo[n - 1][k], memo[n - 1][k - weight] + value);
      }
    }
  }

  console.log(memo[N][K]);
}

solution(inputs);
