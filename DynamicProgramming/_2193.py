#https://www.acmicpc.net/problem/2193


N = int(input())
li = [0,1,1,2]
for i in range(4, N+1):
  li.append(li[i-1]+li[i-2])

print(li[N])