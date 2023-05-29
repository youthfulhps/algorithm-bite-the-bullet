const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const numbers = inputs.shift();
  const memo = [numbers[0]];

  for (let i =1; i<N;i++) {
    memo[i] = Math.max(memo[i-1] + numbers[i], numbers[i]);
  }

  return Math.max(...memo);
}

console.log(solution(inputs));
