const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(inputs) {
  const [N, M] = inputs;
  const answer = [];

  function back(used, idx) {
    if (idx === M) {
      answer.push(used.join(' '));
      return;
    }

    for (let i = 1; i <= N; i++) {
      back([...used, i], idx + 1);
    }
  }

  back([], 0);

  return answer.join('\n');
}

console.log(solution(inputs));
