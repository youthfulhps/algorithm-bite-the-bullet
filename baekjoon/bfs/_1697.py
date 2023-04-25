#https://www.acmicpc.net/problem/1697


from collections import deque
visit = [False]*100001
N, K = map(int, input().split(" "))
dx = ["-1", "+1", "*2"]

def bfs(N):
    cnt = 0
    queue = deque([[N,cnt]])
    while queue:
        pos = queue.popleft()
        cnt = pos[1]
        if not visit[pos[0]]:
            visit[pos[0]]=True
            if pos[0]==K:
                    return cnt
            cnt+= 1
            for i in dx:
                if eval(str(pos[0])+i)>=0 and eval(str(pos[0])+i)<=100000:
                    queue.append([eval(str(pos[0])+i),cnt])
    return cnt

print(bfs(N))