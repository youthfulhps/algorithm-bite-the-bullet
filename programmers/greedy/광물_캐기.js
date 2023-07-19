function solution(picks, minerals) {
  let [diaTool, ironTool, stoneTool] = picks;
  const totalToolCount = diaTool + ironTool + stoneTool;
  const targets = [];

  let answer = 0;

  const routines = Math.floor(minerals.length / 5) + 1;


  for (let i = 1; i<= Math.min(totalToolCount, routines); i++) {
    const start = (i - 1) * 5;
    const end = Math.min(i * 5, minerals.length);

    const currentMinerals = minerals.slice(start, end);
    targets.push([
      currentMinerals.filter(m => m === 'diamond').length,
      currentMinerals.filter(m => m === 'iron').length,
      currentMinerals.filter(m => m === 'stone').length,
    ])
  }

  targets.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return b[2] - a[1];
      }

      return b[1] - a[1];
    }

    return b[0] - a[0];
  })


  while ((diaTool || ironTool || stoneTool) && targets.length) {
    const [diamond, iron, stone] = targets.shift();

    if (diaTool) {
      answer += diamond + iron + stone;
      diaTool--;
      continue;
    }

    if (ironTool) {
      answer += (diamond * 5) + iron + stone;
      ironTool--;
      continue;
    }

    if (stoneTool) {
      answer += (diamond * 25) + (iron * 5) + stone;
      stoneTool--;
      continue;
    }
  }

  return answer;
}
