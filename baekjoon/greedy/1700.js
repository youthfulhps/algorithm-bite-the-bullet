// https://www.acmicpc.net/problem/1700
// https://lhoiktiv.tistory.com/592

const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

// 플러그인이 꽉 찾을때, 꽂혀있는 전자제품들 중 이후에 꽂아야할 순서가 가장 먼 제품을 제거하는 방식

function solution(inputs) {
  let result = 0;
  const [N, K] = inputs.shift().split(' ').map(Number);
  const machines = inputs.shift().split(' ').map(Number);

  let plugins = [];

  for (let i =0; i< K;i++) {
    const current = machines[i];
    if (plugins.includes(current)) continue;

    if (plugins.length < N) {
      plugins.push(current);
    } else {
      let target;
      let targetIndex = 0;
      plugins.forEach((plugin) => {
        const next = machines.indexOf(plugin, i+1) === -1
          ? Infinity
          : machines.indexOf(plugin, i+1);

        if (targetIndex < next) {
          target = plugin;
          targetIndex = next;
        }
      })

      plugins = plugins.filter(plugin => plugin !== target);
      plugins.push(current);
      result++;
    }
  }

  return result;
}

console.log(solution(inputs));
