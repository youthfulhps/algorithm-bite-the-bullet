#https://www.acmicpc.net/problem/2156


N = int(input())
li = [0]

for _ in range(N):
  li.append(int(input()))

D = [0]*10001

for i in range(1, N+1):
  if i==1:
    D[i]=li[i]
  elif i==2:
    D[i]=li[i]+li[i-1]
  else:
    D[i]=max(D[i-2]+li[i], D[i-3]+li[i-1]+li[i], D[i-1])

print(D[N])
    

# 6
# 6
# 10
# 13
# 9
# 8
# 1