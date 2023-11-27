const CACHE_HIT_TIME = 1;
const CACHE_MISS_TIME = 5;

function solution(cacheSize, cities) {
  let answer = 0;
  const set = new Set();

  if (cacheSize === 0) {
    return cities.length * CACHE_MISS_TIME;
  }

  for (let i = 0; i < cities.length; i++) {
    const searchInput = cities[i].toUpperCase();
    if (set.has(searchInput)) {
      answer += CACHE_HIT_TIME;
      set.delete(searchInput);
      set.add(searchInput);
    } else {
      answer += CACHE_MISS_TIME;
      if (set.size >= cacheSize) {
        set.delete(set.values().next().value);
      }

      set.add(searchInput);
    }
  }

  return answer;
}
