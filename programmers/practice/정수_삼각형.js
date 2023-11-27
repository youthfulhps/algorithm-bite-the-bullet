function solution(triangle) {
  const n = triangle.length;

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      const max = Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
      triangle[i][j] += max;
    }
  }

  return triangle[0][0];
}
