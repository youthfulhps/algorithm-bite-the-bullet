# https://www.acmicpc.net/problem/15988


D = [0, 1, 2, 4]
for i in range(4, 1000001):
    D.append((D[i-1]+D[i-2]+D[i-3])%1000000009)

answer = []
for _ in range(int(input())):
    answer.append(D[int(input())])

for i in answer:
    print(i)