const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));


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

function movable(map) {
  const next = Array.from({length: map.length}, () => []);
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[i][j] === 1) {
        next[i].push(j);
      }
    }
  }

  return next;
}


function solution(inputs) {
  const answer = [];
  const N = inputs.shift();
  const next = movable(inputs);

  for (let i = 0; i < N; i++) {
    const dist = Array.from({length: N}, () => 0);
    const heap = new MinHeap();

    heap.push({node: i, weight: 1});

    while (!heap.isEmpty()) {
      const {node: current, weight: currentWeight} = heap.pop();

      for (const nextNode of next[current]) {
        if (!dist[nextNode]) {
          dist[nextNode] = 1;
          heap.push({node: nextNode, weight: 1});
        }
      }
    }

    answer.push(dist);
  }

  return answer.map(dist => dist.join(' ')).join('\n');
}



console.log(solution(inputs));
