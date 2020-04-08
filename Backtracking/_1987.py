#https://www.acmicpc.net/problem/1987


#시간초과, pypy3 사용

R, C = map(int, input().split(" "))
matrix = []

dx = [0,0,-1,1]
dy = [1,-1,0,0]

alpha = [0]*26

for i in range(R):
    matrix.append(list(input()))

tmp = sum(matrix,[])
for i in set(tmp):
    alpha[ord(i)-65]=1

alpha[ord(matrix[0][0])-65]=0
answer = 0
def back(start, move_cnt, visit):
    global answer
    x, y = start
    for i in range(4):
        ax = x+ dx[i]
        ay = y+ dy[i]
        if ax<R and ax>=0 and ay<C and ay>=0:
            if visit[ord(matrix[ax][ay])-65]==1:
                visit[ord(matrix[ax][ay])-65]=0
                back([ax,ay],move_cnt+1,visit)
                visit[ord(matrix[ax][ay])-65]=1
            else:
                answer = max(answer,move_cnt)

back([0,0],1,alpha)
print(answer)