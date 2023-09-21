const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const answer = [];
  const [X, Y] = inputs.shift();
  const map = [Array(X).fill(0)];
  for (let i = 0; i < X; i++) {
    map.push([0, ...inputs.shift()]);
  }

  const K = inputs.shift()[0];
  const questions = inputs;

  const memo = Array.from({length: X + 1}, () => Array(Y + 1).fill(0));

  for (let x = 1; x <= X; x++) {
    for (let y = 1; y <= Y; y++) {
      memo[x][y] = memo[x - 1][y] + memo[x][y - 1] - memo[x - 1][y - 1] + map[x][y];
    }
  }

  questions.forEach(([startX, startY, endX, endY]) => {
    answer.push(memo[endX][endY] - memo[endX][startY - 1] - memo[startX - 1][endY] + memo[startX - 1][startY - 1]);
  })

  return answer.join('\n');
}

console.log(solution(inputs));
