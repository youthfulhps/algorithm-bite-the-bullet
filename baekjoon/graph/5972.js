const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [nodeCount, lineCount] = inputs.shift();
  const graph = Array.from({length: nodeCount + 1}, () => []);
  const visit = Array.from({length: nodeCount + 1}, () => Number.MAX_SAFE_INTEGER);

  visit[1] = 0;

  for (let [from, to, cost] of inputs) {
    graph[from].push([to, cost]);
    graph[to].push([from, cost]);
  }

  const stack = [1];

  while (stack.length) {
    const currentNode = stack.shift();

    for (let [nextNode, cost] of graph[currentNode]) {
      if (visit[nextNode] > visit[currentNode] + cost) {
        visit[nextNode] = visit[currentNode] + cost;
        stack.push(nextNode);
      }
    }
  }

  return visit[nodeCount];
}

console.log(solution(inputs));
