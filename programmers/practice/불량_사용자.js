function solution(userIdList, bannedIdList) {
  const userIdCount = userIdList.length;
  const bannedIdCount = bannedIdList.length;
  let answer = [];
  const visit = Array(userIdCount).fill(0);


  function back(used) {
    if (used.length === bannedIdCount) {
      const result = used.sort((a, b) => a - b).join('');
      if (!answer.includes(result)) {
        answer.push(result);
      }
      return;
    }

    for (let i = 0; i < userIdCount; i++) {
      const currentUserId = userIdList[i];
      const currentBannedId = bannedIdList[used.length];

      if (!visit[i] && compare(currentBannedId, currentUserId)) {
        visit[i] = 1;
        back([...used, i]);
        visit[i] = 0;
      }
    }
  }

  back([]);

  return answer.length;
}

function compare(bannedId, userId) {
  if (bannedId.length !== userId.length) return false;
  return [...bannedId].every((spell, index) => {
    if (spell === '*') return true;
    return spell === userId[index];
  })
}





