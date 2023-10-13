const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(inputs) {
  const [N, M] = inputs;

  function backtracking(used, idx) {
    if (idx === M) {
      console.log(used.join(' '));
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!used.includes(i)) {
        backtracking([...used, i], idx + 1);
      }
    }
  }

  backtracking([], 0);
}

solution(inputs);
