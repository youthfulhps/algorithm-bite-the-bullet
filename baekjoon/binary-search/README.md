## 이진 탐색

1. 반드시 정렬이 되어있어야 한다. 
2. 배열 혹은 이진 트리를 이용하여 구현할 수 있다.
3. 절반씩 줄여나가면서 탐색하기 때문에 O(logN)의 시간복잡도를 가진다.

[자바스크립트 구현 코드](../../reusable-function/binary-search.js)

### 배열을 통한 구현

1. 시작 지점(left), 끝 지점(right), 중간 지점(mid -> (left + right) / 2)
2. mid 값과 찾고자 하는 값을 비교한다.
3. mid(58)이 찾고자 하는 값(45)보다 크기 때문에 mid의 한칸 왼쪽에 right를 위치시킨다.
4. 다시 mid값을 구한다.
5. 다시 mid값과 찾고자 하는 값을 비교한다.
6. mid(36)이 찾고자 하는 값(45)보다 작기 때문에 mid의 한칸 오른쪽에 left를 위치시킨다.
7. left와 right가 같은 값을 가리키게 된다.
8. 다시 mid를 구한다.
9. mid와 찾고자 하는 값(45)가 같기 떄문에 탐색이 종료된다.

```js
const arr = [10, 36, 45, 58, 77, 81, 93];
```

하지만, 여전히 배열은 추가, 삭제에 대해 선형 시간이 소요되기 때문에 이러한 단점을 해결하기 위해 이진 탐색 트리를
통해 구현할 수 있다.

### 이진 탐색 트리를 통한 구현

이진 탐색을 위한 이진 트리로 왼쪽 서브 트리는 루트보다 작은 값, 오른쪽 서브 트리는 루트보다 큰 값이 모여있다.

#### 이진 탐색 트리 요소 추가

루트와 비교하여 작거나 같을 때 왼쪽, 클때는 오른쪽에 삽입한다.

#### 이진 탐색 트리 요소 삭제

1. 단말 정점을 삭제하는 경우, 별다른 처리 없이 부모 정점과 연결을 끊으면 된다.
2. 하나의 서브 트리를 가지는 요소를 제거하는 경우, 제거되는 정점의 부모 간선을 자식 정점을 가리키게 바꾸면 된다.
3. 두개의 서브 트리를 가지는 경우, 왼쪽 서브 트리에서 가장 큰 값 혹은 오른쪽 서브트리에서 가장 작은 값이 루트로 이동하면 된다.

#### 문제점

편향트리가 되면 순차 탐색과 동일한 시간 복잡도를 가지게 된다. 이때 AVL트리나 레드-블랙 트리를 사용할 수 있다.






