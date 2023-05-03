const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' ').map(Number));

function solution(inputs) {
  let [N, currentHeight] = inputs.shift();
  const fruits = inputs.shift().sort((a, b) => a - b);
  let result = 0;

  for (let i =0; i<N; i++) {
    if (currentHeight < fruits[i]) break;
    currentHeight++;
  }

  return currentHeight;
}

console.log(solution(inputs));
