const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const N = Number(inputs);

  const memo = [1n, 1n, 2n, 5n];

  if (N <= 3) {
    return memo[N];
  }

  for (let i = 4; i <= N; i++) {
    let sum = 0n;

    for (let j = 0; j < i; j++) {
      sum += memo[i - j - 1] * memo[j];
    }

    memo.push(sum);
  }

  return memo[N].toString();
}

console.log(solution(inputs));
