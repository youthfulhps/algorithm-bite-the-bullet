const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(inputs) {
  const T = inputs.shift();
  const max = Math.max(...inputs);
  const memo = [0, 1, 2, 4];

  for (let i = 4; i <= max; i++) {
    memo[i] = memo[i - 3] + memo[i - 2] + memo[i - 1];
  }

  return inputs.map(input => memo[input]).join('\n');
}

console.log(solution(inputs));
