function solution(Y, X, queries) {
  const answer = [];
  const map = Array.from({ length: Y }, (_, x) =>
    Array.from({ length: X }, (_, y) => (x * X + y) + 1)
  );

  queries.forEach(query => {
    const targets = spin(map, query);
    let min = 10001;

    targets.forEach(([nextX, nextY, value]) => {
      map[nextX][nextY] = value;
      min = Math.min(min, value);
    })

    answer.push(min);
  })

  return answer;
}

function spin(map, query) {
  // [nextX, nextY, value];
  const targets = [];
  // const [startY, startX, endY, endX] = query.map(x => x - 1);
  const [startX, startY, endX, endY] = query.map(x => x - 1);

  for (let y = startY; y < endY; y++) {
    targets.push([startX, y + 1, map[startX][y]]);
  }

  for (let x = startX; x < endX; x++) {
    targets.push([x + 1, endY, map[x][endY]]);
  }

  for (let y = endY; y > startY; y--) {
    targets.push([endX, y - 1, map[endX][y]]);
  }

  for (let x = endX; x > startX; x--) {
    targets.push([x - 1, startY, map[x][startY]]);
  }

  return targets;
}

console.log(solution(3, 3, [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]))
console.log(solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]))
console.log(solution(100, 97, [[1,1,100,97]]))

