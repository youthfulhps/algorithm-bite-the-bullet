const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [N, K] = inputs.shift();
  const heights = inputs.shift();
  const diff = [];

  for (let i = 0; i<N - 1;i++) {
    diff.push(Math.abs(heights[i] - heights[i + 1]));
  }

  let result = diff
    .sort((a, b) => b - a)
    .slice(K - 1)
    .reduce((sum, curr) => sum + curr, 0);

  return result;
}

console.log(solution(inputs));
