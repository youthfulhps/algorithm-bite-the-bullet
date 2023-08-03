const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(' ').map(Number);

function solution(inputs) {
  const [total, from, to, up, down] = inputs;
  const visit = Array.from({length: total + 1}, () => 0);

  const queue = [from];
  visit[from] = 1;

  while (queue.length) {
    const current = queue.shift();

    [up, down].forEach((move, index) => {
      const next = current + (move * (index === 0 ? 1 : -1));

      if (next >= 1 && next <= total) {
        if (!visit[next]) {
          queue.push(next);
          visit[next] = visit[current] + 1;
        }
      }
    })
  }

  const result = visit[to];

  return result ? result - 1 : 'use the stairs';
}

console.log(solution(inputs));
