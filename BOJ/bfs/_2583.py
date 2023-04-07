#https://www.acmicpc.net/problem/2583


import sys

Y, X, K = map(int, sys.stdin.readline().split(" "))  # N이 X축, M이 Y축
matrix = [[0]*X for _ in range(Y)]



dx = [0,0,1,-1]
dy = [1,-1,0,0]

for _ in range(K):
    x1, y1, x2, y2 = map(int, sys.stdin.readline().split(" "))
    for i in range(x1, x2):
        for j in range(y1, y2):
            matrix[j][i]=1

answer = []
cnt = 0
all_cnt = 0
visit = [[0]*X for _ in range(Y)]
queue = []
for i in range(Y):
    for j in range(X):
        cnt=0
        if matrix[i][j]==0 and visit[i][j]==0:
            queue.append([i,j])
            visit[i][j]=1
            cnt+=1
            while queue:
                n = queue.pop()
                for k in range(4):
                    ax = n[0]+dx[k]
                    ay = n[1]+dy[k]
                    if ax<Y and ax>=0 and ay<X and ay>=0:
                        if matrix[ax][ay]==0 and visit[ax][ay]==0:
                            queue.append([ax,ay])
                            visit[ax][ay]=1
                            cnt+=1
            
            answer.append(cnt)
            all_cnt+=1

answer.sort()

print(all_cnt)        
print(' '.join(map(str, answer)))