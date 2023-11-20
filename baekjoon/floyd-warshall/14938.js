const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));


function solution(inputs) {
  const [areaCount, range, loadCount] = inputs.shift();
  const items = inputs.shift();
  const dist = Array.from({length: areaCount}, () => Array.from({length: areaCount}, () => Infinity));

  let answer = 0;

  for (let i = 0; i < areaCount; i++) {
    dist[i][i] = 0;
  }

  inputs.forEach(([from, to, weight]) => {
    dist[from - 1][to - 1] = weight;
    dist[to - 1][from - 1] = weight;
  })

  for (let mid = 0; mid < areaCount; mid++) {
    for (let i = 0; i < areaCount; i++) {
      for (let j = 0; j < areaCount; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][mid] + dist[mid][j]);
      }
    }
  }

  dist.forEach((distance) => {
    const currentItems = distance.reduce(
      ((sum, curr, index) => range >= curr ? sum + items[index] : sum)
      , 0);

    answer = Math.max(answer, currentItems);
  })

  return answer;
}

console.log(solution(inputs));
