const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const N = +inputs;
  const memo = [0, 1, 3, 5];

  for (let i =3; i<=N;i++) {
    memo[i] = (2 * memo[i-2] + memo[i-1]) % 10007;
  }

  return memo[N]
}

console.log(solution(inputs));
