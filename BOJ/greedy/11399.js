// TODO: i번째 사람이 돈을 인출하는데 Pi가 걸림
// TODO: 오래걸리는 사람 시간의 중복을 줄이는 것

const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  let result = 0;
  const N = Number(inputs.shift());
  const times = inputs.shift().split(' ').map(Number).sort((a, b) => a - b);

  result = times.reduce((prevSum, time, index) => prevSum + time * (N - index), 0);

  return result;
}

console.log(solution(inputs));
