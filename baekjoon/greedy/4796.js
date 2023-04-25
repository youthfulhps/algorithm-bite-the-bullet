const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  let result = '';
  for (let i =0; i<inputs.length - 1; i++) {
    const [L, P, V] = inputs[i].split(' ').map(Number);
    const answer = Math.floor(V / P) * L + (V % P > L ? L : V % P);
    result += `Case ${i+1}: ${answer}\n`
  }

  return result;
}

console.log(solution(inputs));
