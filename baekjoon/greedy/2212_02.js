const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number))

function solution(inputs) {
  const N = inputs.shift()[0];
  const K = inputs.shift()[0];
  const area = inputs.shift();
  area.sort((a,b) =>(a - b));
  const diff = [];

  for (let i = 0; i< N - 1;i++) {
    diff.push(area[i + 1] - area[i]);
  }

  return diff
    .sort((a,b) => b - a)
    .slice(K - 1)
    .reduce((sum, curr) => sum + curr, 0);
}

console.log(solution(inputs));
