const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(inputs) {
  const answer = [];

  for (let i = 1; i <= 30; i++) {
    if (!inputs.includes(i)) {
      answer.push(i);
    }
  }

  return answer.join('\n');
}

console.log(solution(inputs));
