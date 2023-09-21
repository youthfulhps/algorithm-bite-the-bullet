const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const T = inputs.shift()[0];
  const answer = [];

  for (let t = 0; t < T; t++) {
    const N = inputs.shift()[0];
    const coins = inputs.shift();
    const target = inputs.shift()[0];

    const memo = Array(target + 1).fill(0);
    memo[0] = 1;

    for (let coin of coins) {
      for (let i = 0; i <= target; i++) {
        if (i >= coin) {
          memo[i] += memo[i - coin];
        }
      }
    }

    answer.push(memo[target]);
  }

  return answer.join('\n');
}

console.log(solution(inputs));
