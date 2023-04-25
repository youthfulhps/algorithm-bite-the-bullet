const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  let result = 0;
  const N = inputs.shift();

  let schedules = inputs
    .map(input => input.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);

  let time = 0;

  // 수업이 모두 끝나는 시간 전에 가장 많이 수업이 겹치는 시간이 답

  while (schedules.length) {
    // 끝난 수업 제거
    schedules = schedules.filter(schedule => time < schedule[1]);

    const currentLectureCount = schedules
      .filter(schedule => time >= schedule[0]).length;

    result = Math.max(result, currentLectureCount);

    time+= 1;
  }

  return result;
}

console.log(solution(inputs));
