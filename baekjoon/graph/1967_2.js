const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const map = Array.from({length: N + 1}, () => []);

  inputs.forEach(([from, to, distance]) => {
    map[from].push([to, distance]);
    map[to].push([from, distance]);
  })

  const answer = BFS(BFS(1)[1]);

  function BFS(startNode) {
    const visit = Array.from({length: N + 1}, () => 0);

    visit[startNode] = 1;
    const queue = [startNode];

    while (queue.length) {
      const current = queue.shift();

      map[current].forEach(([next, distance]) => {
        if (!visit[next]) {
          visit[next] = visit[current] + distance;
          queue.push(next);
        }
      })
    }

    return visit.reduce(
      (max, curr, index) => curr > max[0] ? [curr, index] : max
      , [0, 0]
    );
  }

  return answer[0] - 1;
}

console.log(solution(inputs));
