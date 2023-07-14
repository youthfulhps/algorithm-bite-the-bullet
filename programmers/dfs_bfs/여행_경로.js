function solution(tickets) {
  let result = [];
  const visit = Array.from({length: tickets.length}, () => 0);

  DFS(['ICN']);

  function DFS(routes) {
    if (routes.length === tickets.length + 1) {
      result.push(routes);
    }

    tickets.forEach((ticket, index) => {
      const [from, to] = ticket;
      if (!visit[index] && from === routes[routes.length - 1]) {
        visit[index] = 1;
        DFS([...routes, to]);
        visit[index] = 0;
      }
    })
  }

  return result.sort()[0];
}
