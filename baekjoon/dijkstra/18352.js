
// 1. 노드와 간선의 값을 함께 받기 위해 변경해주어야 함
// 2. node 번호, weight 값을 가지는 객체로 값을 구성


class MinHeap {
  constructor() {
    this.heap = [null];
  }

  swap(aIndex, bIndex) {
    [this.heap[aIndex], this.heap[bIndex]] = [this.heap[bIndex], this.heap[aIndex]];
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  push(newValue) {
    // 1. 현재 마지막 리프 노드 다음으로 우선 삽입
    // 2. 부모와 비교했을 때 자식이 작으면 부모와 위치를 바꾼다.
    // 3. 부모의 인덱스는 자식 인덱스 / 2

    this.heap.push(newValue);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex && this.heap[parentIndex].weight > newValue.weight) {
      this.swap(parentIndex, currentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    // 마지막 정점 노드를 루트 노드로 대체한다.
    const minValue = this.heap[1];

    // pop 할 것이 있는지 확인
    if (this.heap.length <= 2) {
      this.heap = [null];
    } else {
      this.heap[1] = this.heap.pop();
    }

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 왼쪽 노드가 없으면 오른쪽도 없음
    if (!this.heap[leftIndex]) {
      return minValue;
    }

    // 오른쪽 노드가 없으면 왼쪽만 있음
    if (!this.heap[rightIndex]) {
      if (this.heap[currentIndex].weight > this.heap[leftIndex].weight) {
        this.swap(currentIndex, leftIndex);
      }

      return minValue;
    }

    // 왼쪽과 오른쪽 자식이 자신 보다 모두 클때까지 (minheap)

    while (
      this.heap[leftIndex] &&
      this.heap[rightIndex] &&
      this.heap[currentIndex].weight > this.heap[leftIndex].weight &&
      this.heap[currentIndex].weight > this.heap[rightIndex].weight
      ) {
      const minIndex = this.heap[leftIndex].weight > this.heap[rightIndex].weight ? rightIndex : leftIndex;

      this.swap(currentIndex, minIndex);

      currentIndex = minIndex;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return minValue;
  }
}


const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

// 단방향으로 모든 가중치가 1인 최단 경로
// 도착 지점까지의 거리가 K인 지점의 갯수를 출력

// 거리값을 최소값으로 갱신하면서 메모이제이션
// 최소힙을 사용, 거리가 작은 것 순으로 꺼내와서 순회

// 다익스트라
// 먼저 시작지점의 노드를 최소힙에 push
// 이동할 수 있는 지점을 순회해서 도착 지점의 최소거리를 갱신한다.

function movableNodes(road, N) {
  const next = Array.from({length: N + 1}, () => []);

  for (const [from, to] of road) {
    next[from].push(to);
  }

  return next;
}

function solution(inputs) {
  const heap = new MinHeap();
  const [N, E, K, X] = inputs.shift();
  const road = inputs;

  const nextNodes = movableNodes(road, N);

  const dist = Array.from({length: N + 1}, () => Infinity);
  heap.push({node: X, weight: 0});
  dist[X] = 0;

  while (!heap.isEmpty()) {
    const {node: current, weight: currentWeight} = heap.pop();

    const nextWeight = currentWeight + 1;

    nextNodes[current].forEach((next) => {
      if (dist[next] > nextWeight) {
        dist[next] = nextWeight;
        heap.push({node: next, weight: nextWeight});
      }
    })
  }

  const result = dist
    .reduce((result, curr, index) => curr === K ? [...result, index] : result, [])
    .join('\n')

  return result || -1;
}

console.log(solution(inputs));


