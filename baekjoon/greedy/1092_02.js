const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const craneCount = inputs.shift()[0];
  const cranes = inputs.shift().sort((a, b) => b - a);
  const boxCount = inputs.shift()[0];
  const boxes = inputs.shift().sort((a, b) => b - a);
  let result = 0;

  let sum = boxes.reduce((sum, curr) => sum + curr, 0);

  if (Math.max(...boxes) > cranes[0]) {
    return -1;
  }

  while (sum) {
    for (let crane of cranes) {
      for (let i = 0; i<boxCount;i++) {
        if (boxes[i] && crane >= boxes[i]) {
          sum -= boxes[i];
          boxes[i] = 0;
          break;
        }
      }
    }

    result++;
  }

  return result;
}

console.log(solution(inputs));
