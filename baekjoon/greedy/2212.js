// https://www.acmicpc.net/problem/13164 참고!

const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const N = inputs.shift();
  const centerCount = Number(inputs.shift());

  const sensor = inputs.shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const gaps = [];

  for (let i =0;i<N -1; i++) {
    gaps.push(sensor[i+1] - sensor[i]);
  }

  return gaps
    .sort((a, b) => b - a)
    .slice(centerCount -1)
    .reduce((sum, curr) => sum + curr, 0);
}

console.log(solution(inputs));
