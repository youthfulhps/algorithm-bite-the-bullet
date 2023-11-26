const DIVIDER = 1234567;

function solution(n) {
  const memo = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    memo.push((memo[i - 1] + memo[i - 2]) % DIVIDER);
  }

  return memo[n] % DIVIDER;
}
