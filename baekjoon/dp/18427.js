const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [N, M, H] = inputs.shift();
  const blocks = [null, ...inputs];

  // 메모 N * H
  const memo = Array.from({length: N + 1},
    () => Array.from({length: H + 1},
      () => 0));

  for (let i = 0; i <= N; i++) {
    memo[i][0] = 1 % 10007;
  }

  // 해당 높이 블록을 사용할 수 있는 경우의 수를 더해간다.

  for (let student = 1; student <= N; student++) {
    memo[student] = [...memo[student - 1]];
    for (const currentBlock of blocks[student]) {
      for (let i = currentBlock; i <= H; i++) {
        memo[student][i] += (memo[student - 1][i - currentBlock]) % 10007;
      }
    }
  }

  return memo[N][H] % 10007;
}

console.log(solution(inputs));
