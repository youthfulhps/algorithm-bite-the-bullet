const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  let result = 0;

  const [N, tapeLength] = inputs.shift().split(' ').map(Number);
  let points = inputs.shift().split(' ').map(Number).sort((a, b) => a - b);

  while (points.length) {
    const startPoint = points.shift();
    points = points.filter(point => point > startPoint + tapeLength - 1);

    result+=1;
  }

  return result;
}

console.log(solution(inputs));
