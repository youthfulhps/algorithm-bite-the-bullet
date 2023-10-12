const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

// 시간 초과인데,,그럼 뭘로 풀지

function solution(inputs) {
  const answer = [];
  const [levelCount, N] = inputs.shift().split(' ').map(Number);

  const level = [];

  for (let i = 0; i < levelCount; i++) {
    const [levelName, levelRange] = inputs.shift().split(' ');
    level.push([levelName, Number(levelRange)])
  }

  const numbers = inputs.map(Number);

  let globalStart = 0;

  level.slice(0, -1).forEach(([levelName, levelRange], index) => {
    const levelLastIndex = binarySearch(numbers, globalStart, N, levelRange);

    answer.push(...Array(levelLastIndex - globalStart + (index === 0 ? 1 : 0)).fill(levelName));

    globalStart = levelLastIndex;
  })

  answer.push(...Array(N - globalStart - 1).fill(level[level.length - 1][0]));

  return answer.join('\n');
}

function binarySearch(arr, start, end, findValue) {
  let mid = Math.floor((start + end) / 2);

  while (end >= start) {
    if (findValue > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return start;
}

console.log(solution(inputs));
