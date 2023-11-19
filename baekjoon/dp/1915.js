const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split('').map(Number));

function solution(inputs) {
  console.log(inputs);
  const [X, _, Y] = inputs.shift();
  const memo = Array.from({length: X + 1}, () => Array(Y + 1).fill(0));
  const map = [Array(Y + 1).fill(0), ...inputs.map(input => [0, ...input])];
  let answer = 0;

  for (let x = 1; x <= X; x++) {
    for (let y = 1; y <= Y; y++) {
      if (map[x][y]) {
        const min = Math.min(memo[x][y - 1], memo[x - 1][y], memo[x - 1][y - 1]);
        memo[x][y] = min + 1;
      }

      answer = Math.max(answer, memo[x][y]);
    }
  }

  return answer ** 2;
}

console.log(solution(inputs));
