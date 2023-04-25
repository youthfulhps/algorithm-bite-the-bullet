const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  const N = inputs.shift();
  const centerCount = Number(inputs.shift());
  let result;

  const set = new Set();

  inputs
    .shift()
    .split(' ')
    .forEach(input => set.add(Number(input)));

  const sensors = Array.from(set).sort((a,b) => a - b);

  // 센서별로 거리를 구한다.
  // 가장 좁게 붙어있는 곳에 먼저 기지를 세운다.
  // 세울 수 있는 기지국 수만큼 반복

  console.log(sensors);

  return result;
}

console.log(solution(inputs));
