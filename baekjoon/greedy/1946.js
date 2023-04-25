const inputs = require("fs").readFileSync("./input.txt").toString().trim().split('\n');

function solution(inputs) {
  let result = [];

  const T = Number(inputs.shift());

  for (let i =0; i<T; i++) {
    const N = Number(inputs.shift());
    let passerCount = 1;
    let ranks = [];

    for (let j=0; j<N; j++) {
      ranks.push(inputs.shift().split(' ').map(Number));
    }

    ranks.sort((a,b) => a[0] - b[0]);

    let secondRank = ranks[0][1];
    for (let k=0; k<ranks.length; k++) {
      if (secondRank > ranks[k][1]) {
        passerCount+=1;
        secondRank = ranks[k][1];
      }
    }

    result.push(passerCount);
  }

  return result;
}

solution(inputs).forEach(answer => console.log(answer));

