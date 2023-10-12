const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  let [N, numbers, max] = inputs;
  const MAX = max[0];

  numbers.sort((a, b) => a - b);

  let left = 0;
  let right = numbers[numbers.length - 1];

  while (right >= left) {
    const mid = Math.floor((right + left) / 2);
    const sum = numbers.reduce((sum, curr) => sum + (curr > mid ? mid : curr), 0);

    if (MAX >= sum) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

console.log(solution(inputs));
