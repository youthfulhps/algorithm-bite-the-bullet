# https://www.acmicpc.net/problem/11052

N = int(input())
D=[0]*(N+1) 
prices = [0] + list(map(int, input().split(" ")))

for i in range(N+1):
    for j in range(1, i+1):
        D[i] = max(D[i], D[i-j]+prices[j])
    
print(D[N])