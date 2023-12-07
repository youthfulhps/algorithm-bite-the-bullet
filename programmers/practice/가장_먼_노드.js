function solution(n, edge) {
  const visit = Array.from({length: n + 1}, () => 0);
  const routes = Array.from({length: n + 1}, () => []);

  for (const [from, to] of edge) {
    routes[from].push(to);
    routes[to].push(from);
  }

  const queue = [1];
  visit[1] = 1;

  while (queue.length) {
    const current = queue.shift();

    for (const next of routes[current]) {
      if (!visit[next]) {
        queue.push(next);
        visit[next] = visit[current] + 1;
      }
    }
  }

  const max = Math.max(...visit);
  return visit.filter((v) => v === max).length;
}
