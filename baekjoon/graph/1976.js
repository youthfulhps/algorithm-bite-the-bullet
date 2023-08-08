const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  let answer = 'YES';
  const N = inputs.shift()[0];
  const M = inputs.shift()[0];
  const plan = inputs.pop();

  const map = inputs;

  const parent = Array.from({length: N + 1}, (_, index) => index);

  function find(x) {
    if (parent[x] !== x) {
      return find(parent[x]);
    }

    return parent[x];
  }

  function union(x, y) {
    const xp = find(x);
    const yp = find(y);

    if (xp > yp) {
      parent[xp] = yp;
    } else {
      parent[yp] = xp;
    }
  }

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (map[x][y] === 1) {
        union(x + 1, y + 1);
      }
    }
  }

  for (let i = 0; i < M - 1; i++) {
    if (find(plan[i]) !== find(plan[i + 1])) {
      answer = 'NO';
      break;
    }
  }

  return answer;
}

console.log(solution(inputs));

// 3  도시 수
// 3  여행 계획에 속한 도시 수
// 0 1 0 연결 여부
// 1 0 1
// 0 1 0
// 1 2 3 // 여행 계획
