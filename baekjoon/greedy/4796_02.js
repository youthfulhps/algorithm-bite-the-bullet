const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  for (let i = 0; i<inputs.length;i++) {
    const [L, P, V] = inputs[i];

    if (L === 0) {
      break;
    }

    const result = (Math.floor(V / P) * L) + Math.min(V % P, L);

    console.log(`Case ${i + 1}: ${result}`)
  }
}

solution(inputs);
