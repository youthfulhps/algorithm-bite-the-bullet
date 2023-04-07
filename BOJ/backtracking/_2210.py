# https://www.acmicpc.net/problem/2210


matrix = []

for _ in range(5):
    matrix.append(list(input().split(' ')))

answer = []

dx = [1,-1,0,0]
dy = [0, 0, 1, -1]

def backtracking(x,y ,strr):
    strr+=matrix[x][y]
    if len(strr)==6:
        answer.append(strr)
        return
    else:
        for k in range(4):
            ay = x+dx[k]
            ax = y+dy[k]
            if ax>=0 and ax<5 and ay>=0 and ay<5:
                backtracking(ay, ax, strr)

for i in range(5):
    for j in range(5):
        backtracking(i, j,'')
            

print(len(set(answer)))


        
    
    

