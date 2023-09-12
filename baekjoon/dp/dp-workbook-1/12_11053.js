const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const numbers = inputs.shift();

  const memo = Array.from({length: N}, () => 1);
  memo[0] = 1;

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        memo[i] = Math.max(memo[i], memo[j] + 1);
      }
    }
  }

  return Math.max(...memo);
}

console.log(solution(inputs));
