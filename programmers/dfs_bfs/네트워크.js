function solution(n, computers) {
  let result = 0;
  const visit = Array(n).fill(0);

  const queue = [];

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (computers[x][y] && !visit[x]) {
        queue.push(x);
        visit[x] = 1;
        result++;
      }

      while (queue.length) {
        const currentComputer = queue.shift();

        for (let i = 0; i < n; i++) {
          if (computers[currentComputer][i] && !visit[i]) {
            queue.push(i);
            visit[i] = 1;
          }
        }
      }
    }
  }

  return result;


}
