const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const [cableCount, target] = inputs.shift().split(' ').map(Number);
  const cables = inputs.map(Number);

  const max = Math.pow(2, 31) - 1;

  function binarySearch(start, end) {
    let mid = Math.floor((start + end) / 2);

    while (end >= start) {
      const sum = cables.reduce((sum, cable) => Math.floor(cable / mid) + sum, 0);
      if (sum >= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }

      mid = Math.floor((start + end) / 2);
    }

    return end;
  }

  return binarySearch(1, max);
}

console.log(solution(inputs));
