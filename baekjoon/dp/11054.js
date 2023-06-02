const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const numbers = inputs.shift();

  const memo = [[1, 1]];

  for (let i =1; i<N;i++) {
    let increase = 0;
    let decrease = 0;

    const currentNumber = numbers[i];

    numbers.slice(0, i).forEach((number, index) => {
      if (currentNumber > number) {
        increase = Math.max(increase, memo[index][0]);
      } else if (currentNumber < number) {
        decrease = Math.max(...[decrease, ...memo[index]]);
      }
    })

    memo.push([increase + 1, decrease + 1])
  }

  return Math.max(...memo.flat());
}

console.log(solution(inputs));
