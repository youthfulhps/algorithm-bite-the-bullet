function solution(n, s) {
  if (n > s) return [-1];

  if (s % n === 0) {
    return Array(n).fill(s / n);
  } else {
    const base = Math.floor(s / n);
    const remain = s % n;

    return [...Array(n - remain).fill(base), ...Array(remain).fill(base + 1)]
  }
}
