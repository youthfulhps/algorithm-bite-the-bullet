function solution(skill, skill_trees) {
  let answer = 0;
  const skills = skill.split('');

  skill_trees.forEach((skillTree) => {
    const replaced = skillTree.split('').filter(skill => skills.includes(skill));
    if (skills.slice(0, replaced.length).join('') === replaced.join('')) {
      answer++;
    }
  })

  return answer;
}

