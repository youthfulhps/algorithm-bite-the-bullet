const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const numbers = inputs.shift();

  const memo = Array.from({length: N}, () => 0);
  memo[0] = numbers[0];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        memo[i] = Math.max(memo[i], memo[j] + numbers[i]);
      }
    }

    if (!memo[i]) {
      memo[i] = numbers[i];
    }
  }

  return Math.max(...memo);
}

console.log(solution(inputs));
