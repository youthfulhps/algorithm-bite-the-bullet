#https://www.acmicpc.net/problem/2667


dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

answer = []


size = int(input())
cnt = 1
matrix = []
for _ in range(size):
    matrix.append(list(map(int, input())))
    
visit = [[0]*size for _ in range(size)]

answer=[]

for i in range(size):
    for j in range(size):
        queue=[]
        if matrix[i][j]==1 and visit[i][j]==0:
            visit[i][j]=cnt
            queue.append([i,j])
            while queue:
                m,n = queue.pop(0)
                for k in range(4):
                    ax = m+dx[k]
                    ay = n+dy[k]
                    if ax>=0 and ax<size and ay>=0 and ay<size:
                        if visit[ax][ay]==0 and matrix[ax][ay]==1:
                            visit[ax][ay]=cnt
                            queue.append([ax,ay])
            answer.append(sum(visit,[]).count(cnt))                
                        
            cnt+=1

print(len(answer))
answer= sorted(answer)
for i in answer:
    print(i)
    

