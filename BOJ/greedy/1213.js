const inputs = require("fs").readFileSync("./input.txt").toString().trim();

function solution(inputs) {
  inputs = inputs
    .split('')
    .sort((a,b) => a.localeCompare(b))
    .join('');

  const map = new Map();

  for (let input of inputs) {
    map.set(input, (map.get(input) ?? 0) + 1);
  }

  let paired = '';

  for (let [key, value] of map) {
    paired += key.repeat(Math.floor(value / 2));

    if (value % 2) {
      map.set(key, value % 2);
    } else {
      map.delete(key);
    }
  }

  let remains = '';

  if (map.size) {
    const remainValueCount = Array.from(map.values()).reduce((sum, curr) => sum + curr, 0);

    if (remainValueCount > 1) {
      return "I'm Sorry Hansoo";
    }

    remains = Array.from(map.entries()).reduce((sum, [key, value]) => {
      if (value) {
        sum+=key;
      }

      return sum;
    }, '');
  }

  return `${paired}${remains}${paired.split('').reverse().join('')}`;
}

console.log(solution(inputs));
