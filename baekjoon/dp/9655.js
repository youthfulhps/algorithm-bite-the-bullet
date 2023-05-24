const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  let N = Number(inputs);
  let gameCount = 0;

  gameCount += Math.floor(N / 3);
  N = N % 3;

  return (gameCount + N) % 2 === 0 ? 'CY' : 'SK';
}

console.log(solution(inputs));
