#https://www.acmicpc.net/problem/1012


#테스트 케이스 갯수 입력
#테스트 갯수 반복->
#배추밭 사이즈 입력x,y 배추 갯수 z
#배추 위치 입력
cnt = int(input())
test_num = 0
answer = []

dx = [0,0,-1,1]
dy = [-1,1,0,0]

while test_num<cnt:
    count = 1
    x,y,num_be = map(int, input().split(" "))
    matrix = [[0]*y for i in range(x)]
    for _ in range(num_be):
        m,n = map(int, input().split(" "))
        matrix[m][n] = 1

    visit = [[0]*y for i in range(x)]

    for i in range(x):
        for j in range(y):
            queue = []
            if matrix[i][j]==1 and visit[i][j]==0:
                visit[i][j]=count
                queue.append([i,j])
                while queue:
                    node = queue.pop(0)
                    for k in range(4):
                        ax = node[0]+dx[k]
                        ay = node[1]+dy[k]
                        if ax>=0 and ax<x and ay>=0 and ay<y:
                            if matrix[ax][ay]==1 and visit[ax][ay]==0:
                                 queue.append([ax,ay])
                                 visit[ax][ay]=count
                count+=1
    answer.append(max(sum(visit,[])))
    test_num+=1

for i in answer:
    print(i)