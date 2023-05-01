const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  const [N, M] = inputs.shift().split(' ').map(Number);
  let result = '';
  let sum = 0;

  for (let i =0; i< M; i++) {
    let target = new Map();

    inputs.forEach(input => {
      target.set(input[i], (target.get(input[i]) ?? 0) + 1);
    })

    target = new Map(Array.from(target)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .sort((a, b) => b[1] - a[1])
    );

    result += Array.from(target.keys())[0];
    sum += Array.from(target.values()).reduce((sum, curr) => sum + curr, 0) - Array.from(target.values())[0];
  }

  return [result, sum];
}

solution(inputs).map(result => console.log(result));
