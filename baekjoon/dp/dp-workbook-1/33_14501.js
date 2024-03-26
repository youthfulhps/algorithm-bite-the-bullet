const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const schedules = inputs;

  const memo = Array.from({length: N}, () => 0);

  for (let i = 0; i < N; i++) {
    let max = 0;

    for (let j = 0; j < i; j++) {
      if (j + schedules[j][0] <= i) {
        max = Math.max(max, memo[j]);
      }
    }

    if (schedules[i][0] + i <= N) {
      max += schedules[i][1];
    }

    memo[i] = max;
  }

  return Math.max(...memo);
}

console.log(solution(inputs));
