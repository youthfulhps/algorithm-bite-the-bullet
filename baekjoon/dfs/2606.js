const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  // dfs
  // 간선들을 그래프로 표현
  const N = inputs.shift()[0];
  const lineCount = inputs.shift()[0];
  const lines = inputs;

  // 컴퓨터 번호와 인덱스를 대응시키기 위해 N + 1 해서 0번쨰 인덱스를 미사용.
  const graph = Array.from({length: N + 1}, () => []);

  lines.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  })

  const visit = Array.from({length: N + 1}, () => 0);

  const stack = [1];

  while (stack.length) {
    const currentComputer = stack.pop();

    if (!visit[currentComputer]) {
      visit[currentComputer] = 1;
      stack.push(...graph[currentComputer]);
    }
  }

  return visit.reduce((sum, curr) => sum + curr, 0) - 1;
}

console.log(solution(inputs));
