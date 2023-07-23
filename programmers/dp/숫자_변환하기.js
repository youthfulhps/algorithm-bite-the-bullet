const numberMax = Number.MAX_SAFE_INTEGER;

function solution(x, y, n) {
  const memo = Array(y + 1).fill(-1);

  if (x === y) {
    return 0;
  }

  memo[x] = 0;

  for (let i = x + 1; i<=y; i++) {
    let min = [];

    if (memo[i - n] !== undefined && memo[i - n] !== -1) {
      min.push(memo[i - n])
    }

    if ((i % 2) === 0 && memo[i / 2] !== -1) {
      min.push(memo[i / 2])
    }

    if ((i % 3) === 0 && memo[i / 3] !== -1) {
      min.push(memo[i / 3])
    }

    if (min.length) {
      memo[i] = Math.min(...min) + 1;
    }
  }

  return memo[y];
}
