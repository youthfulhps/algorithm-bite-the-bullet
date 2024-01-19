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
    inputs.shift();
    answer.push(maxSum(inputs.shift()));
  }

  return answer.join('\n');
}

function maxSum(arr) {
  let total = arr[0];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], arr[i] + max);
    total = Math.max(total, max);
  }

  return total;
}

console.log(solution(inputs));
