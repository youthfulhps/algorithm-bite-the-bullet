const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  let N = Number(inputs);
  let result = 0;

  while (N > 2) {
    if (N % 5 === 0) {
      result+= Math.floor(N / 5);
      N = 0;
      break;
    } else {
      N -= 3;
      result++;
    }
  }

  return N === 0 ? result : -1;
}

console.log(solution(inputs));
