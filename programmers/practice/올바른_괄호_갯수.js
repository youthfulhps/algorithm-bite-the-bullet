function solution(n) {
  const memo = Array(n + 1).fill(0);
  memo[0] = 1;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      memo[i] += memo[j - 1] * memo[i - j];
    }
  }

  return memo[n];
}
