const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  let answer = 0;
  const N = inputs.shift()[0];
  const current = Array(N + 1).fill(null);

  inputs.forEach(([cow, position]) => {
    if (current[cow] === null) {
      current[cow] = position;
    } else {
      if (current[cow] !== position) {
        current[cow] = position;
        answer++;
      }
    }
  })

  return answer;
}

console.log(solution(inputs));
