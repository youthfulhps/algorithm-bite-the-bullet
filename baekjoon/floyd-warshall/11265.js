const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [hallCount, requestCount] = inputs.shift();
  const map = inputs.slice(0, hallCount);
  const requests = inputs.slice(hallCount);

  for (let mid = 0; mid < hallCount; mid++) {
    for (let i = 0; i < hallCount; i++) {
      for (let j = 0; j < hallCount; j++) {
        map[i][j] = Math.min(map[i][j], map[i][mid] + map[mid][j]);
      }
    }
  }

  const answer = requests.map(([from, to, time]) =>
    map[from - 1][to - 1] > time ? 'Stay here' : 'Enjoy other party'
  ).join('\n');

  return answer;
}

console.log(solution(inputs));
