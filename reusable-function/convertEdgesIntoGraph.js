/**
 * Convert Nodes into Metrics
 * @param {number} nodeCount
 * @param {[number, number][]} edges
 * @param {boolean} hasDirection
 */
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
