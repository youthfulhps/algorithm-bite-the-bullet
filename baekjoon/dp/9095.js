// 예를 들어 4 라면,
// 4로 넘어올 수 있는 케이스는
// 1을 만들 수 있는 케이스에 각각 + 3
// 2를 만들 수 있는 케이스에 각각 + 2
// 3을 만들 수 있는 케이스에 각각 + 1

const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(inputs) {
  const result = [];
  const N = inputs.shift();
  const memo = [0, 1, 2, 4];

  const maxValue = Math.max(...inputs);

  for (let i =4; i<=maxValue;i++) {
    memo[i] = memo[i-1] + memo[i-2] + memo[i-3];
  }

  for (let input of inputs) {
    result.push(memo[input]);
  }

  return result;
}

solution(inputs).forEach(result => console.log(result));

