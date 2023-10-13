const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [N, M] = inputs.shift();
  const numbers = inputs.shift().sort((a, b) => a - b);
  const answer = [];



  function back(used, idx) {
    if (idx === M) {
      answer.push(used.join(' '));
      return;
    }

    numbers.forEach((number) => {
      if (!used.includes(number)) {
        back([...used, number], idx + 1);
      }
    })
  }

  back([], 0);

  return answer.join('\n');
}

console.log(solution(inputs));
