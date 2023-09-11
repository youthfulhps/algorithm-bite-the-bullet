const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(sugar) {
  let answer = 0;

  if (sugar % 5 === 0) {
    return Math.floor(sugar / 5);
  }

  while (sugar > 2) {
    if (sugar % 5 === 0) {
      return answer + Math.floor(sugar / 5);
    }

    sugar -= 3;
    answer++;
  }

  return sugar === 0 ? answer : -1;
}

console.log(solution(Number(inputs)));
