#https://www.acmicpc.net/problem/2178


#칸 줄수와 너비 입력
#칸수에 맞게 0,1 입력
#한칸씩 움직일 수 있는 리스트 정의
#bfs 알고리즘을 통해 arr[1]이면 append


n,m = map(int, input().split(" "))
li=[[0]*m for i in range(n)]

for i in range(n):
    tmp = list(input())
    for j in range(len(tmp)):
        if tmp[j]=='1':
            li[i][j]=1

visit = [[0]*m for i in range(n)]

dx = [0,0,1,-1]  #대각선 제외 인접 행렬로 이동할 수 있는 기준
dy = [1,-1,0,0]

cnt = 1
visit[0][0] = 1
queue = []
queue.append([0,0])

while queue:
    x,y = queue.pop(0)
    if x ==n-1 and y==m-1:
        print(visit[x][y])
        break
    for i in range(4):
        ax = x+dx[i]
        ay = y+dy[i]
        if ax>=0 and ax<n and ay>=0 and ay<m:
            if visit[ax][ay]==0 and li[ax][ay]==1:
                cnt+=1
                visit[ax][ay]=visit[x][y]+1
                queue.append([ax,ay])