const inputs = require("fs").readFileSync("./input.txt").toString().trim();

function solution(inputs) {
  let result = 0;

  let returnValue = Number(inputs);

  while (returnValue%5 !==0 && returnValue > 1) {
    returnValue-=2;
    result+=1;
  }

  if (returnValue === 1) {
    result = -1;
  } else {
    result+= Math.floor(returnValue / 5);
  }

  return result;
}

console.log(solution(inputs));
