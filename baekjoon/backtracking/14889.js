const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

function solution(inputs) {
  const N = inputs.shift()[0];
  const statMap = inputs;

  const visit = Array(N).fill(0);

  let min = 4001;

  function back(members) {
    if (members.length === N / 2) {
      const currentTeamStat = getTeamStat(statMap, members);

      const opposingMembers = Array.from(Array(N).keys()).filter((member) => !members.includes(member));
      const opposingTeamStat = getTeamStat(statMap, opposingMembers)

      min = Math.min(min, Math.abs(currentTeamStat - opposingTeamStat));

      return;
    }

    for (let i = 0; i < N; i++) {
      if (visit[i]) continue;

      if (members.length && members[members.length - 1] > i) continue;

      visit[i] = 1;
      back([...members, i]);
      visit[i] = 0;
    }
  }

  back([]);

  return min;
}

function getTeamStat(statMap, members) {
  let sum = 0;
  for (let i = 0; i < members.length; i++) {
    for (let j = 0; j < members.length; j++) {
      if (i === j) continue;
      sum += statMap[members[i]][members[j]];
    }
  }

  return sum;
}

console.log(solution(inputs));
