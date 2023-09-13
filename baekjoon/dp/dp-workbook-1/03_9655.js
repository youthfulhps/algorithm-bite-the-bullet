const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  let gameCount = 0;
  while (inputs) {
    inputs -= inputs >= 3 ? 3 : 1;
    gameCount++;
  }

  return gameCount % 2 === 0 ? 'CY' : 'SK';
}

console.log(solution(Number(inputs)));
