const DIVIDER = 1234567;

function solution(n) {
  const memo = Array.from({length: n + 1}, () => 0);

  memo[1] = 1 % DIVIDER;

  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % DIVIDER;
  }

  return memo[n];
}
