const inputs = require("fs").readFileSync("./input.txt").toString().trim();

function solution(inputs) {
  let result = '';

  // 문자열을 순회한다.
  // .이면 그대로 result에 합산
  // X -> 연속 2 미만이면, -1
  // X -> 연속 4 이상이면, AAAA (우선 사용되어야 하는 것)
  // X -> 연속 2 이상이면, BB

  for (let i =0; i<inputs.length;i++) {
    if (inputs[i] === '.') {
      result += '.';
    } else {
      let subXCount = 0;
      let currentIndex = i;
      while (inputs[currentIndex] === 'X') {
        subXCount++;
        currentIndex++;
      }

      if (subXCount < 2) {
        return -1;
      }

      while ((!(subXCount % 4) || !(subXCount % 2)) && subXCount) {
        if (subXCount >= 4) {
          result += 'AAAA';
          subXCount -= 4;
          continue;
        }

        if (subXCount >=2) {
          result += 'BB';
          subXCount -= 2;
        }
      }

      if ((subXCount % 2) ===1) {
        return -1;
      }

      i = currentIndex - 1;
    }
  }

  return result;
}

console.log(solution(inputs));
