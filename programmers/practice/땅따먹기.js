function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      let max = 0;

      for (let k = 0; k < 4; k++) {
        if (k !== j && land[i - 1][k] > max) {
          max = land[i - 1][k]
        }
      }

      land[i][j] += max;
    }
  }

  return Math.max(...land[land.length - 1]);
}
