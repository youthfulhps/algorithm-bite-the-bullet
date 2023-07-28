const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const result = [];
  const [N, lineCount] = inputs.shift();

  const map = Array.from({length: N + 1}, () => []);

  inputs.forEach(([from, to]) => {
    map[from].push(to);
    map[to].push(from);
  })

  for (let from = 1; from <= N; from++) {
    let baconCount = 0;
    for (let to = 1; to <= N; to++) {
      const queue = [[from, 0]];
      const visit = Array(N + 1).fill(0);

      while (queue.length) {
        const [current, traversalCount] = queue.shift();

        if (current === to) {
          baconCount += traversalCount;
          break;
        }

        if (visit[current]) {
          continue;
        }

        visit[current] = 1;

        map[current]
          .forEach(next => queue.push([next, traversalCount + 1]))
      }
    }

    result.push(baconCount);
  }

  let answer = 101;
  let min = Number.MAX_SAFE_INTEGER;

  result.forEach((baconCount, index) => {
    if (min > baconCount) {
      min = baconCount;
      answer = index;
    }
  })

  return answer + 1;
}

console.log(solution(inputs));
