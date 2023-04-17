const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n').map(Number);

function solution(inputs) {
  const N = inputs.shift();
  let result = [];

  const coins = [25, 10, 5, 1];

  for (let input of inputs) {
    const answer = [];

    coins.forEach((coin) => {
      answer.push(Math.floor(input / coin));
      input %= coin;
    })

    result.push(answer.join(' '));
  }

  return result.join('\n');
}

console.log(solution(inputs));
