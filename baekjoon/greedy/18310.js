const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  const N = Number(inputs.shift());
  const target = inputs.shift().split(' ').map(Number).sort((a, b) => a -b);

  return target[Math.floor((N -1) / 2)];
}

console.log(solution(inputs));
