const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  let answer = 0;
  const [N, target] = inputs.shift();
  const numbers = inputs.shift();

  function back(usedIndex) {
    const sum = usedIndex.reduce((sum, index) => sum + numbers[index], 0);

    if(usedIndex.length && sum === target) {
      answer++;
    }

    numbers.forEach((number, index) => {
      if (!usedIndex.includes(index)) {
        back([...usedIndex, index]);
      }
    })
  }

  back([]);

  return answer;
}

console.log(solution(inputs));
