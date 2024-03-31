const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const target = inputs.shift()[0];
  const coinVariant = inputs.shift()[0];
  const memo = Array.from({length: target + 1}, () => 0);
  const coins = inputs.sort((a, b) => b[0] - a[0]);

  memo[0] = 1;

  for (const [coinValue, coinCount] of coins) {
    for (let i = target; i >= 0; i--) {
      for (let k = 1; k <= coinCount; k++) {
        if (i - coinValue * k >= 0) {
          memo[i] += memo[i - coinValue * k];
        }
      }
    }
  }

  return memo[target];
}

console.log(solution(inputs));
