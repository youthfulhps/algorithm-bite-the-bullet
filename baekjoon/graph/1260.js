// https://www.acmicpc.net/problem/1260

const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  let result = [];
  const [N, M, V] = inputs.shift().split(' ').map(Number);
  const edges = inputs.map((input) => input.split(' ').map(Number));
  const graph = convertEdgesIntoGraph(N, edges).map((nodes) => nodes.sort((a, b) => a - b));

  // dfs
  const stack = [...graph[V].slice().reverse()];
  let visit = [V];
  while (stack.length) {
    const nextNode = stack.pop();
    if (visit.includes(nextNode)) continue;

    visit.push(nextNode);
    stack.push(...graph[nextNode].slice().reverse());
  }

  result.push(visit);

  // bfs
  const queue = [...graph[V].slice()];
  visit = [V];
  while (queue.length) {
    const nextNode = queue.shift();
    if (visit.includes(nextNode)) continue;

    visit.push(nextNode);
    queue.push(...graph[nextNode].slice());
  }

  result.push(visit);

  return result;
}

function convertEdgesIntoGraph(nodeCount, edges, hasDirection = false) {
  const graph = Array.from(Array(nodeCount + 1), () => []);

  for (let [from, to] of edges) {
    graph[from].push(to);

    if (!hasDirection) {
      graph[to].push(from);
    }
  }

  return graph;
}

solution(inputs).map((result) => console.log(result.join(' ')))
