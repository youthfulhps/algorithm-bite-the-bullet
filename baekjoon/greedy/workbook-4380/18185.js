const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n');

// ! i ~ i+2 까지 연속적으로 구매가 가능할때 가장 저렴하다.

function solution(inputs) {
  const N = Number(inputs.shift());
  const factories = inputs.shift().split(' ').map(Number);
  factories.push(0);
  factories.push(0);

  let result = 0;

  for (let current = 0; current < N; current++) {
    if (!factories[current]) continue;

    let minBundle = Math.min(factories[current], factories[current + 1], factories[current + 2]);
    result += minBundle * 7;
    factories[current] -= minBundle
    factories[current + 1] -= minBundle
    factories[current + 2] -= minBundle

    minBundle = Math.min(factories[current], factories[current + 1]);
    result += minBundle * 5;
    factories[current] -= minBundle
    factories[current + 1] -= minBundle

    result += factories[current] * 3;
    factories[current] = 0;
  }

  return result;
}

console.log(solution(inputs));
