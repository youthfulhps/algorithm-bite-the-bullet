const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const arr = inputs.shift();

  // increase, decrease
  const memo = Array.from({length: N}, () => [0, 0]);
  memo[0] = [1, 1];

  for (let i = 1; i < N; i++) {
    if (arr[i] === arr[i - 1]) {
      memo[i] = memo[i - 1].map(t => t + 1);
    }
    else if (arr[i] > arr[i - 1]) {
      memo[i][0] = memo[i - 1][0] + 1;
      memo[i][1] = 1;
    } else {
      memo[i][0] = 1;
      memo[i][1] = memo[i - 1][1] + 1;
    }
  }

  return Math.max(...[].concat(...memo));
}

console.log(solution(inputs));
