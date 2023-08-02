const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

// * fail, 문제 풀이 방법을 확인함
// ! BFS로 모든 노드에서 시작하는 방식은 시간 초과

// * 루트에서 가장 먼 노드를 찾는다.
// * 가장 먼 노드에서 가장 먼 노드까지의 거리가 트리의 지름이다.

function solution(inputs) {
  const N = inputs.shift()[0];
  const map = Array.from({length: N + 1}, () => []);

  inputs.forEach((input) => {
    const from = input[0];
    input = input.slice(1, -1);
    for (let i = 0; i < input.length; i += 2) {
      const to = input[i];
      const weight = input[i + 1];
      map[from].push([to, weight]);
      map[to].push([from, weight]);
    }
  });

  const [diameter, _] = BFS(BFS(1)[1]);

  function BFS(startNode) {
    const visit = Array.from({length: N + 1}, () => 0);
    visit[startNode] = 1;
    const queue = new Queue();
    queue.enqueue([startNode, 1]);

    while (queue.size) {
      const [currentNode, _] = queue.dequeue();

      for (let nextNode of map[currentNode]) {
        if (!visit[nextNode[0]]) {
          visit[nextNode[0]] = visit[currentNode] + nextNode[1];
          queue.enqueue(nextNode);
        }
      }
    }

    let maxNode = [0, 0];

    visit.forEach((distance, index) => {
      if (distance > maxNode[0]) {
        maxNode = [distance, index];
      }
    })

    return maxNode;
  }

  return diameter - 1;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    const returnValue = this.head.value;
    this.head = this.head.next;
    this.size--;

    return returnValue;
  }
}


console.log(solution(inputs));
