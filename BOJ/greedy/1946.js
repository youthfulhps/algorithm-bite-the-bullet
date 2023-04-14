const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  let result = [];

  const T = Number(inputs.shift());

  for (let i =0; i<T; i++) {
    const N = Number(inputs.shift());
    let passerCount = 0;
    let ranks = [];

    for (let j=0; j<N; j++) {
      ranks.push(inputs.shift().split(' ').map(Number));
    }

    // 하나의 순위로 소팅
    // 1등과 비교해서 둘다 뒤쳐지는 등수의 인원은 제외
    // 1등은 result++, 제거
    // 그 다음 등수와 둘다 뒤쳐지는 등수의 인원 제외
    // 반복
    ranks.sort((a,b) => a[0] - b[0]);

    while (ranks.length > 1) {
      const [_, secondRank] = ranks.shift();
      passerCount +=1;
      ranks = ranks.filter((rank) => secondRank > rank[1]);
    }
    result.push(passerCount + 1);
  }

  return result;
}

solution(inputs).forEach(answer => console.log(answer));

