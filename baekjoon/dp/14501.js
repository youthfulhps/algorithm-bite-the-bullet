const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const schedules = inputs;

  const memo = Array(N).fill(0);
  for (let i = 0; i< N; i++) {
    let maxPay = 0;

    for (let j = 0; j<i;j++) {
      if (j + schedules[j][0] <=i) {
        maxPay = Math.max(maxPay, memo[j]);
      }
    }

    if (i + schedules[i][0] <= N) {
      maxPay += schedules[i][1];
    }

    memo[i] = maxPay;
  }

  return Math.max(...memo);
}

console.log(solution(inputs));
