const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const [N, C] = inputs.shift().split(' ').map(Number);
  const houses = inputs.map(Number).sort((a, b) => a - b);
  let start = 0;
  let end = houses[houses.length - 1];

  while (end >= start) {
    let mid = Math.floor((start + end) / 2);

    let targetHouse = houses[0];
    let installed = 0;

    for (let i = 1; i < N; i++) {
      const distance = houses[i] - targetHouse;

      if (distance >= mid) {
        targetHouse = houses[i];
        installed++;
      }
    }

    if (installed >= C - 1) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return end;
}

console.log(solution(inputs));
