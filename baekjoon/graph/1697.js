const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(inputs) {
  const LIMIT = 100000;
  const [from, to] = inputs;

  const visit = Array(LIMIT + 1).fill(0);

  const queue = [from];

  while (queue.length) {
    const currentPosition = queue.shift();

    if (currentPosition === to) {
      break;
    }

    if (currentPosition >= 0 && currentPosition <= LIMIT) {
      for (let nextPosition of [currentPosition + 1, currentPosition - 1, currentPosition * 2]) {
        if (visit[nextPosition]) continue;
        queue.push(nextPosition);
        visit[nextPosition] = visit[currentPosition] + 1;
        // visit[nextPosition] = visit[nextPosition]
        //   ? Math.min(visit[nextPosition], visit[currentPosition] + 1)
        //   : visit[currentPosition] + 1;
      }
    }
  }

  return visit[to];
}

console.log(solution(inputs));
