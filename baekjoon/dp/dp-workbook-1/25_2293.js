const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const [N, T] = inputs.shift().split(' ').map(Number);
  const coins = inputs.map(Number);
  const memo = Array.from({length: T + 1}, () => 0);

  memo[0] = 1;

  for (let coin of coins) {
    for (let i = 0; i <= T; i++) {
      if (i >= coin) {
        memo[i] += memo[i - coin];
      }
    }
  }

  return memo[T];
}

console.log(solution(inputs));
