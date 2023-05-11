// 예외적으로 readline 라이브러리를 사용해야함
// 정렬 후 매 3번째를 제외하고 합산하는 풀이법

const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .sort((a, b) => b - a);

function solution(inputs) {
  let result = inputs
    .filter((input, index) => index === 0 || index%3 !== 0)
    .reduce((sum, curr) => sum + curr, 0);

  return result;
}

console.log(solution(inputs));
