const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [N, listCount] = inputs.shift();
  const pres = Array(N + 1).fill(0);
  const map = Array.from({length: N + 1}, () => []);
  const answer = [];

  inputs.forEach(([n, ...list]) => {
    for (let i = 0; i < n - 1; i++) {
      map[list[i]].push(list[i + 1]);
      pres[list[i + 1]] += 1;
    }
  })

  const queue = [];

  pres.forEach((preCount, index) => {
    if (index === 0) return;
    if (!preCount) queue.push(index);
  })

  while (queue.length) {
    const current = queue.shift();

    answer.push(current);

    map[current].forEach(next => {
      pres[next] -= 1;

      if (!pres[next]) {
        queue.push(next);
      }
    })
  }

  return answer.length === N ? answer.join('\n') : 0;
}

console.log(solution(inputs));
