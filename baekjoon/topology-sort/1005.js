const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function preprocess(inputs) {
  const answer = [];
  const T = inputs.shift()[0];

  for (let i = 0; i < T; i++) {
    const [N, M] = inputs.shift();
    const times = [0, ...inputs.shift()];
    const rules = inputs.splice(0, M);
    const target = inputs.shift()[0];
    answer.push(solution(N, M, times, rules, target));
  }

  return answer.join('\n');
}

function solution(N, M, times, rules, target) {
  const map = Array.from({length: N + 1}, () => []);
  const pres = Array(N + 1).fill(0);
  const result = [...times];

  rules.forEach(([from, to]) => {
    map[from].push(to);
    pres[to] += 1;
  })

  const queue = [];

  pres.forEach((pre, index) => {
    if (index === 0) return;
    if (!pre) queue.push(index);
  })

  while (queue.length) {
    const current = queue.shift();

    map[current].forEach(next => {
      pres[next] -= 1;
      if (result[current] + times[next] > result[next]) {
        result[next] = result[current] + times[next];
      }

      if (!pres[next]) {
        queue.push(next);
      }
    })
  }

  return result[target];
}

console.log(preprocess(inputs));
