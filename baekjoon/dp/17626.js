const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  const N = Number(inputs);
  const memo = Array.from({length: N + 1}, () => 5);

  for (let i = 1; i <= N; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      memo[i] = 1;
      continue;
    }

    for (let j = 1; i - Math.pow(j, 2) > 0;j++) {
      memo[i] = Math.min(memo[i], memo[i - Math.pow(j, 2)] + 1);
    }
  }

  return memo[N];
}

console.log(solution(inputs));
