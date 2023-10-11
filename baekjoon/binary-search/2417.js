const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const target = Number(inputs);
  // 최대값은 루트 2^63
  const max = Math.floor(Math.sqrt(Math.pow(2, 63)));

  return binarySearch(0, max, target);
}

function binarySearch(left, right, findValue) {
  let mid = Math.floor((left + right) / 2);
  let powMid = Math.pow(mid, 2);
  while (right >= left) {
    if (powMid === findValue) {
      return mid;
    }

    if (findValue > powMid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
    powMid = Math.pow(mid, 2);
  }

  return mid + 1;
}

console.log(solution(inputs));
