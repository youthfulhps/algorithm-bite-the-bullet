
function solution(n, wires) {
  let answer = -1;

  for (let i = 0; i < wires.length; i++) {
    const filteredWires = wires.filter((_, index) => index !== i);
    const result = traversal(n, filteredWires);

    answer = answer === -1 ? result : Math.min(answer, result);
  }

  return answer;
}

function traversal(n, wires) {
  const map = Array.from({length: n + 1}, () => []);
  const visit = Array.from({length: n + 1}, () => 0);

  const tower = [];



  wires.forEach(([from, to]) => {
    map[from].push(to);
    map[to].push(from);
  })

  for (let i = 1; i <= n; i++) {
    if (visit[i]) {
      continue;
    }

    const stack = [i];
    visit[i] = 1;

    let count = 0;

    while (stack.length) {
      const current = stack.pop();

      map[current].forEach(next => {
        if (!visit[next]) {
          stack.push(next);
          visit[next] = visit[current] + 1;
        }
      })


      count++;
    }

    tower.push(count);
  }

  return Math.abs(tower[0] - tower[1]);
}

console.log(solution(7, [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]));


// 9	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]	3
// 4	[[1,2],[2,3],[3,4]]	0
// 7	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]	1
