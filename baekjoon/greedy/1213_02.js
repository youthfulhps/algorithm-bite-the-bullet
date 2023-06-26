const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim();

function solution(inputs) {
  let map = new Map();
  let result = '';
  let remainString = '';

  for (let i of inputs) {
    map.set(i, (map.get(i) ?? 0) + 1);
  }

  map = new Map(Array.from(map).sort((a,b) => a[0].localeCompare(b[0])))

  map.forEach((value, key) => {
    const mid = Math.floor(result.length / 2);
    const length = Math.floor(value / 2) * 2;

    result = result.slice(0, mid) + key.repeat(length) + result.slice(mid);

    const remainLength = value - length
    if (remainLength !== 0) {
      remainString += key.repeat(remainLength);
    }
  })

  if (remainString.length > 1) {
    return "I'm Sorry Hansoo";
  } else {
    const mid = Math.floor(result.length / 2);
    result = result.slice(0, mid) + (remainString) + result.slice(mid);
  }

  return result;

}

console.log(solution(inputs));
