const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const FROM = 1;
const TO = 100;

function solution(inputs) {
  inputs.shift();
  const moves = inputs;

  const visit = Array(TO + 1).fill(0);

  const queue = [FROM];
  visit[FROM] = 1;

  while (queue.length) {
    const current = queue.shift();

    if (current === 100) {

    }

    for (let i = 1; i <= 6; i++) {
      let next = current + i;

      const nextIndex = moves.map(([start, _]) => start).findIndex(start => start === next);

      if (nextIndex !== -1) {
        next = moves[nextIndex][1];
      }

      if (visit[next]) {
        continue;
      }

      if (next >= 101) {
        continue;
      }

      queue.push(next);
      visit[next] = visit[current] + 1;
    }
  }

  return visit[TO] - 1;
}

console.log(solution(inputs));
