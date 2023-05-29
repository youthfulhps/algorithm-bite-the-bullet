const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const numbers = inputs.shift();

  const memo = [numbers[0]];

  for (let i =1; i<N;i++) {
    const currentNumber = numbers[i];
    let maxMemo = 0;

    numbers.slice(0, i).forEach((number, index) => {
      if (currentNumber > number) {
        maxMemo = Math.max(maxMemo, memo[index]);
      }
    })

    memo[i] = maxMemo === 0 ? currentNumber : maxMemo + currentNumber;
  }

  return Math.max(...memo);
}

console.log(solution(inputs));
