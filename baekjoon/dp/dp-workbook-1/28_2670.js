const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(inputs) {
  const N = inputs.shift();

  const memo = Array.from({length: N}, () => 0);
  memo[0] = inputs[0];

  for (let i = 1; i < N; i++) {
    memo[i] = Math.max(inputs[i], memo[i - 1] * inputs[i]);
  }

  return Math.max(...memo).toFixed(3);
}

console.log(solution(inputs));
