function solution(n, money) {
  const typeLength = money.length;
  const memo = Array(n + 1).fill(0);
  memo[0] = 1;

  for (let i = 0; i <= typeLength; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= money[i]) {
        memo[j] += memo[j - money[i]] % 1_000_000_007;
      }
    }
  }

  return memo[n];
}
