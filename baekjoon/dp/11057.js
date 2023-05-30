const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const N = +inputs;
  const memo = [Array(10).fill(1)];

  for (let i =1; i<N;i++) {
    memo.push(Array(10).fill(0));

    for (let j=0; j<10;j++) {
      memo[i][j] = (memo[i -1].slice(j).reduce((sum, curr) => sum + curr, 0)) % 10007;
    }
  }

  return (memo[N -1].reduce((sum, curr) => sum + curr, 0)) % 10007;
}

console.log(solution(inputs));
