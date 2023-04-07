#https://www.acmicpc.net/problem/11403


def BFS(start, matrix, N):
    visit = [0]*N
    q = [start]
    while q:
        index = q.pop(0)
        for i, j in enumerate(matrix[index]):
            if visit[i]==0 and j==1:
                visit[i]=1
                q.append(i)
    return visit

if __name__ == '__main__':
    N = int(input())
    matrix=[]
    for _ in range(N):
        matrix.append(list(map(int,input().split(" "))))
    for i in range(N):
        print(' '.join(map(str, BFS(i, matrix,N))))