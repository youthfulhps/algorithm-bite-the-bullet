const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [N, W] = inputs.shift();
  const map = Array.from({length: N + 1}, () => Array(N + 1).fill(0));

  inputs.forEach(([from, to, dist]) => {
    map[from][to] = dist;
  })

  for (let mid = 1; mid <= N; mid++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        if (!map[i][mid] || !map[mid][j]) continue;
        if (!map[i][j]) {
          map[i][j] = map[i][mid] + map[mid][j];
        } else {
          map[i][j] = Math.min(map[i][j], map[i][mid] + map[mid][j]);
        }
      }
    }
  }

  let answer = Infinity;
  for (let i = 1; i <= N; i++) {
    if (map[i][i]) {
      answer = Math.min(answer, map[i][i]);
    }
  }

  return answer === Infinity ? -1 : answer;
}

console.log(solution(inputs));
