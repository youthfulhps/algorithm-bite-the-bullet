#https://www.acmicpc.net/problem/2579


N = int(input())
stairs = [0]
for i in range(N):
    stairs.append(int(input()))

D = [0]

for i in range(1, N+1):
    if i==1:
        D.append(stairs[1])
    elif i==2:
        D.append(stairs[1]+stairs[2])
    else:
        D.append(max(D[i-3]+stairs[i-1]+stairs[i],D[i-2]+stairs[i]))

print(D[-1])