const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const [N, M] = inputs.shift();
  const lights = [0, ...inputs.shift()];

  for (let i = 0; i < M; i++) {
    const [command, start, end] = inputs.shift();

    switch (command) {
      case 1:
        lights[start] = end;
        break;
      case 2:
        for (let j = start; j <= end; j++) {
          lights[j] = lights[j] ? 0 : 1;
        }
        break;
      case 3:
        for (let j = start; j <= end; j++) {
          lights[j] = 0;
        }
        break;
      case 4:
        for (let j = start; j <= end; j++) {
          lights[j] = 1;
        }
        break;
    }
  }

  return lights.slice(1).join(' ');
}

console.log(solution(inputs));
