#https://www.acmicpc.net/problem/14502


import sys
from copy import deepcopy
from itertools import combinations
X,Y = map(int, sys.stdin.readline().split(" "))

dx = [0,0,-1,1]
dy = [-1,1,0,0]

matrix = []

zero_point = []
two_point = []
for i in range(X):
    matrix.append(list(map(int, sys.stdin.readline().split(" "))))
    for j in range(Y):
        if matrix[i][j]==0:
            zero_point.append([j,i])
        elif matrix[i][j]==2:
            two_point.append([j,i])
        
answer = 0

def vir(start, tmp_wall , matrix):
    global two_point
    m,n = start
    matrix = deepcopy(matrix)
    for i in tmp_wall:
        matrix[i[1]][i[0]]=1
    for i in two_point:
        queue = [i]
        while queue:
            m,n = queue.pop()
            for k in range(4):
                ax = m+dx[k]
                ay = n+dy[k]
                if ax>=0 and ax<Y and ay>=0 and ay<X:
                    if matrix[ay][ax]==0:
                        queue.append([ax,ay])
                        matrix[ay][ax]=2

    return sum(matrix, []).count(0)

candi = list(combinations(zero_point,3))

for kk in candi:
    answer = max(answer, vir([i,j], kk, matrix))
            
print(answer)