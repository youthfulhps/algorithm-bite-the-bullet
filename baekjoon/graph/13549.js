const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(' ').map(Number);

function solution(inputs) {
  const [from, to] = inputs;
  const max = Math.max(from, to) + 1;

  const visit = Array.from({length: max}, () => 0);

  const queue = [from];
  let usedQueue = [];
  visit[from] = 1;

  while (queue.length) {
    const batchLength = queue.length;
    usedQueue = [...usedQueue, ...queue];

    for (let i = 0; i < batchLength; i++) {
      const current = queue.shift();

      if (current === to) {
        break;
      }

      // 순간 이동
      if (current * 2 <= max && !visit[current * 2]) {
        queue.push(current * 2);
        usedQueue.push(current * 2);
        visit[current * 2] = visit[current];
      }
    }

    // 시작 지점에서 부터 순간 이동이 가능한 곳이 있을때까지 계속 queue해주고, usedQueue에는 queue에 쌓였던 모든 위치를 담아준다.
    // 이후 queue가 비어있다면, 즉 시작 지점에서 부터 0초로 이동가능한 위치 확인이 끝났다면,
    // usedQueue에 담겨있던 위치들에서 한칸씩 이동된 위치를 다시 queue에 담는다.
    // 이를 반복.

    if (!queue.length) {
      while(usedQueue.length) {
        const usedCurrent = usedQueue.shift();
        for (let next of [usedCurrent + 1, usedCurrent - 1]) {
          if (next >= 0 && next <= max) {
            if (!visit[next]) {
              queue.push(next);
              visit[next] = visit[usedCurrent] + 1;
            }
          }
        }
      }
    }
  }

  return visit[to] - 1;
}

console.log(solution(inputs));
