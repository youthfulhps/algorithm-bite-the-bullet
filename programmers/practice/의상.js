function solution(clothes) {
  const map = new Map();

  for (const [name, category] of clothes) {
    map.set(category, (map.get(category) ?? 0) + 1);
  }

  return Array
    .from(map.values())
    .reduce((sum, curr) => (curr + 1) * sum, 1) - 1;
}
