const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [N, M] = inputs.shift();
  const answer = [];
  const map = Array.from({length: N + 1}, () => []);
  const pres = Array(N + 1).fill(0);

  inputs.forEach(([from, to]) => {
    map[from].push(to);
    pres[to] += 1;
  })

  const queue = [];

  // 앞에 있어야 하는 사람이 없는 사람부터 확인
  pres.forEach((pre, index) => {
    if (index === 0) return;
    if (!pre) queue.push(index);
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

  return answer.join(' ');
}

console.log(solution(inputs));
