const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const answer = [];
  const [N, M] = inputs.shift();
  const numbers = inputs.shift().sort((a, b) => a - b);

  function back(used, idx) {
    if (idx === M) {
      answer.push(used.join(' '));
      return;
    }

    for (let i = 0; i < N; i++) {
      const current = numbers[i];
      if (idx === 0) {
        back([current], idx + 1);
      } else {
        if (current> used[used.length - 1]) {
          back([...used, current], idx + 1);
        }
      }
    }
  }

  back([], 0);

  return answer.join('\n');
}

console.log(solution(inputs));
