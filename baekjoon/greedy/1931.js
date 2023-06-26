const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift();
  const schedules = inputs;
  let result = 0;

  // 당장 빨리 끝나는게 좋다.
  schedules.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let currentEndTime = 0;

  for (let [start, end] of schedules) {
    if (start >= currentEndTime) {
      currentEndTime = end;
      result++;
    }
  }

  return result;
}

console.log(solution(inputs));
