function solution(n, s, a, b, fares) {
  const dist = Array.from({length: n + 1}, () => Array(n + 1).fill(Infinity));

  for (let i = 1; i <= n; i++) {
    dist[i][i] = 0;
  }

  for (const [from, to, cost] of fares) {
    dist[from][to] = cost;
    dist[to][from] = cost;
  }

  for (let mid = 1; mid <= n; mid++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        const currentCost = dist[i][mid] + dist[mid][j];

        if (dist[i][j] > currentCost) {
          dist[i][j] = currentCost;
        }
      }
    }
  }

  let answer = dist[s][a] + dist[s][b];

  for (let i = 1; i <= n; i++) {
    answer = Math.min(
      answer,
      dist[s][i] + dist[i][a] + dist[i][b]
    )
  }

  return answer;
}






