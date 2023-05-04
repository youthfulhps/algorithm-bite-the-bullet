const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const N = inputs.shift();
  const trees = inputs.shift().split(' ').map(Number)
    .sort((a, b) => b - a);

  let result = 0;

  for (let i=0; i<N;i++) {
     result = Math.max(result, trees[i] + i+1);
  }

  return result + 1;
}

console.log(solution(inputs));
