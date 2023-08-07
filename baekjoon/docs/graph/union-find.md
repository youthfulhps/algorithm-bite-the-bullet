### 1. 유니온 파인드

Disjoint Set을 표현할때 사용하는 알고리즘이다. 서로 중복되지 않는 부분 집합들로 나누어진 원소들에 대한
정보를 저장하고 조작하는 자료구조이다. (서로소 집합 자료구조)

트리 구조는 Disjoint Set을 가장 효율적으로 표현할 수 있으며, 노드와 엣지 세트가 주어졌을 때 어떤 구성 요소가
어떤 구룹에 속하는지, 그러한 그룹이 몇 개인지 알아낼 수 있다.

![Disjoint Set 예시](https://user-images.githubusercontent.com/61806500/137947892-3183cbb4-e76f-4949-8efc-1a9a6e6e5430.png)

1. 기본적으로 배열 구조를 사용하여 트리를 시뮬레이션한다.
2. 배열의 인덱스는 노드를 나타내고, 배열의 값은 각 노드의 부모를 나타낸다.
3. 예를 들어, `array[i] === i` 라면, 노드 i가 해당 그룹의 부모이다.
4. `array[i] === j` 이고 `i !== j` 이면, 노드 i는 j 부모를 가지는 자식 노드를 뜻한다.
5. 따라서, 노드 i의 부모를 찾기 위해 `array[j] === j`를 만날 때까지 인덱스 i에서 부모쪽으로 향하며
재귀적으로 순회하여 부모를 찾아낼 수 있다.

#### 구현

1. `initialize`, 초기 배열을 세팅해야 한다. 각각의 인덱스(노드 번호)는 각각의 부모(각각의 노드가 각각의 집합의 부모)가 된다.

```js
const UF = Array.from({length: n}, (_, i) => i);
```

2. `find`, 부모 노드를 찾을 때까지 루트를 향해 순회한다.

```js
function find(node) {
  if (node !== UF[node]) {
    // 트리가 단방향으로만 분포되는 형상을 막기 위해 경로 압축까지 진행
    UF[node] = find(UF[node]);
  }
  
  return UF[node]; 
}
```

3. `union`, 두 노드의 부모를 찾아 비교하고, 동일하지 않는 경우 한 부모가 다른 부모를 가리키도록 하여 결합한다.
일반적으로 더 작은 값으로 합친다.

```js
function union(node1, node2) {
  const parent1 = find(node1);
  const parent2 = find(node2);
  
  if (parent1 < parent2) {
    UF[parent2] = parent1;
  } else {
    UF[parent1] = parent2;
  }
}
```

그러나, 여기서 주위할 점은 트리가 단방향으로 밀집되는 경우 트리 구조의 탐색 시간 복잡도의 장점을 살릴 수 없을 수 있다.
트리 높이가 커질수록 시간 복잡도는 커지며, 불균형한 노드 분포 또한 시간 복잡도가 커진다. 이러한 문제는 작은 값에 합치기
보단 높이가 작은 트리에 결합하는 방식으로 해결할 수 있다.
(일반적으로 트리 구조에서의 탐색은 O(logn) 이자만, 불균형 최악의 경우 O(n)의 시간복잡도를 가지게 된다.)

```js
class UF {
  constructor(N) {
    this.parent = new Array.from({ length: N }, (_, i) => i);
    this.count = new Array(N).fill(1);
  }

  find(x) {
    if (this.parent[x] != x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(x, y) {
    const xp = this.find(x), yp = this.find(y);
    if (xp == yp) return;

    if (this.count[xp] < this.count[yp]) {
      this.parent[xp] = yp;
      this.count[yp] += this.count[xp];
    } else {
      this.parent[yp] = xp;
      this.count[xp] += this.count[yp];
    }
  }
}
```

4. 같은 부모를 가지고 있는 지 즉, 같은 집합에 속하는지에 대한 확인

```js
function isSameParent(node1, node2) {
  const parent1 = find(node1);
  const parent2 = find(node2);
  
  return parent1 === parent2;
}
```











