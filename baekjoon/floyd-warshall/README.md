## floyd-warshall

다익스트라 알고리즘과 다른점을 기억하자.

1. 하나의 정점에서 다른 모든 정점까지의 최단 거리를 구하는 알고리즘인 다익스트라, 반면 플로이드-워셜 알고리즘은 한번 실행하여 모든 노드 간 최단 경로를 구할 수 있음 
2. 음의 간선도 사용할 수 있음
3. 플로이드-워셜은 시간 복잡도가 O(n^3), 그래프의 크기가 영향을 많이 끼친다.