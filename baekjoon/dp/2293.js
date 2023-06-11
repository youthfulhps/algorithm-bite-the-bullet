const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const [N, K] = inputs.shift().split(' ').map(Number);
  const coins = inputs.map(Number);

  const memo = Array(K + 1).fill(0);

  memo[0] = 1;

  for (let coin of coins) {
    for (let k = 0; k<=K;k++) {
      if (k >= coin) {
        memo[k] += memo[k - coin];
      }
    }
  }

  return memo[K];
}

console.log(solution(inputs));
