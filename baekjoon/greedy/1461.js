const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim().split('\n')
  .map((input) => input.split(' ').map(Number));

function solution(inputs) {
  const [N, M] = inputs.shift();
  let result = [];
  const numbers = inputs.shift();

  let plus = numbers.filter(input => input >= 0)
    .sort((a, b) => b - a);
  let minus = numbers.filter(input => input < 0)
    .sort((a, b) => a - b);

  while (plus.length > M -1) {
    const current = plus[0];
    result.push(current);
    plus = plus.slice(M);
  }

  while (minus.length > M -1) {
    const current = minus[0];
    result.push(Math.abs(current));
    minus = minus.slice(M);
  }

  if (plus.length) {
    result.push(plus[0]);
  }

  if (minus.length) {
    result.push(Math.abs(minus[0]));
  }

  result.sort((a, b) => b - a);

  const sum = (result.shift()) + result.reduce((sum, curr) => sum + curr * 2, 0);

  return sum;
}

console.log(solution(inputs));
