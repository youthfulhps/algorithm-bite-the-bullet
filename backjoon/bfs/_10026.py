#https://www.acmicpc.net/problem/10026


dx = [0,0,1,-1] 
dy = [1,-1,0,0]

N = int(input())
matrix = []
for _ in range(N):
    matrix.append(list(input()))

full_cnt = 0

answer = []

while full_cnt<2:
    area_cnt = 0
    visit = [[0]*N for i in range(N)]
    queue = []
    for i in range(N):
        for j in range(N):
            if visit[i][j]==0:
                queue.append([i,j])
                visit[i][j]=1
                area_cnt+=1
                while queue:
                    x,y = queue.pop(0)
                    for k in range(4):
                        ax = x+dx[k]
                        ay = y+dy[k]
                        if ax>=0 and ax<N and ay>=0 and ay<N:
                            if full_cnt==0 and visit[ax][ay]==0:  #색약이 아닐때 -> full_cnt=0
                                if matrix[ax][ay]==matrix[x][y]:
                                    queue.append([ax,ay])
                                    visit[ax][ay]=1
                            if full_cnt==1 and visit[ax][ay]==0:   #색약일때
                                if matrix[x][y]==matrix[ax][ay]=='B':
                                    queue.append([ax,ay])
                                    visit[ax][ay]=1
                                elif matrix[x][y]=='R' or matrix[x][y]=='G':
                                    if matrix[ax][ay]=='R' or matrix[ax][ay]=='G':
                                        queue.append([ax,ay])
                                        visit[ax][ay]=1 
    answer.append(area_cnt)
    full_cnt+=1
                                    

print(' '.join(map(str, answer)))