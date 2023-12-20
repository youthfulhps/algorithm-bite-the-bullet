const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [N, M] = inputs.shift();
  const result = Array(N + 1).fill(0);
  const map = Array.from({length: N + 1}, () => []);
  const pres = Array(N + 1).fill(0);

  inputs.forEach(([from, to]) => {
    map[from].push(to);
    pres[to] += 1;
  })

  const queue = [];

  pres.forEach((pre, index) => {
    if (index === 0) return;
    if (!pre) queue.push([index, 1]);
  })

  while (queue.length) {
    const [current, count] = queue.shift();
    result[current] = count;

    map[current].forEach(next => {
      pres[next] -= 1;

      if (!pres[next]) {
        queue.push([next, count + 1]);
      }
    })
  }

  return result.slice(1).join(' ');
}

console.log(solution(inputs));
