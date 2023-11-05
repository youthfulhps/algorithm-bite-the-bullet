const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [N, M] = inputs.shift();
  const dots = inputs.shift().sort((a, b) => a - b);
  const ranges = inputs;
  const answer = [];

  // 해당 범위에 포함되는 시작 인덱스와 종료 인덱스를 찾아 길이를 출력한다.

  for (const [from, to] of ranges) {
    const startIndex = lowerBound(dots, from);
    const endIndex = upperBound(dots, to);

    answer.push(endIndex - startIndex);
  }

  return answer.join('\n');
}

function upperBound(arr, findValue) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);

  while (end > start) {
    if (arr[mid] > findValue) {
      end = mid;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return end;
}

function lowerBound(arr, findValue) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);

  while (end > start) {
    if (arr[mid] >= findValue) {
      end = mid;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return end;
}

console.log(solution(inputs));
