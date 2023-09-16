const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const MAX = 100000;

function solution(inputs) {
  const N = inputs.shift()[0];
  const K = inputs.pop()[0];
  const energy = inputs;

  if (N === 1) {
    return energy[0][0];
  }

  // 현재 칸 기준 [
  // 큰 점프를 아직 사용하지 않은 경우,
  // 매우 큰 점프를 이미 사용했거나, 사용해서 온 경우

  const memo = Array.from({length: N}, () => Array.from({length: 2}, () => MAX));

  memo[1][0] = energy[0][0];
  memo[2][0] = Math.min(memo[1][0] + energy[1][0], memo[0][0] + energy[0][1]);
  memo[3][0] = Math.min(memo[2][0] + )

  for (let i = 3; i < N; i++) {
    // i 칸까지 아직 사용하지 않고 넘어온 경우 1칸 혹은 2칸만 뛰었을 것.
    memo[i][0] = Math.min(
      memo[i - 1][0] + energy[i - 1][0],
      memo[i - 2][0] + energy[i - 2][1]
      )

    memo[i][1] = Math.min(
      // 이미 이전에 사용해서 한칸만 뛰어왔거나,
      memo[i - 1][1] + energy[i - 1][0],
      // 이미 이전에 사용해서 두칸만 뛰어왔거나,
      memo[i - 2][1] + energy[i - 2][1],
      // 방금 사용해서 세칸을 뛰어왔거나,
      memo[i - 3][0] + K
    )
  }

  console.log(memo);
  return Math.min(...memo[N - 1])
}

console.log(solution(inputs));
