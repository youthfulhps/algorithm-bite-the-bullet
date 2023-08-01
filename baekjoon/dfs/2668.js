const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(inputs) {
  const N = inputs.shift();
  const map = Array.from({length: N + 1}, () => 0);
  const set = new Set();

  inputs.forEach((input, index) => {
    map[index + 1] = input;
  })

  for (let i = 1; i <= N; i++) {
    DFS(i, [], []);
  }

  function DFS(current, indexArr, visitArr) {
    const next = map[current];

    if (visitArr.includes(next) || indexArr.includes(current)) {
      if (isArrayEqual(indexArr, visitArr)) {
        indexArr.forEach(element => set.add(element));
      }

      return;
    }

    DFS(next, [...indexArr, current], [...visitArr, next])
  }

  const result = Array.from(set).sort((a, b) => a - b);

  return [result.length, result];
}

function isArrayEqual(a, b) {
  if (a === b) return true;
  if (a.length !== b.length) return false;

  return a.every(element => b.includes(element));
}

const [resultLength, result] = solution(inputs);

console.log(resultLength);
result.forEach(answer => console.log(answer));

