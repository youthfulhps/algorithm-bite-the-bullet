N = int(input())

C = 1000000
memo = [0, 1]
p = 1500000

for i in range(2,p):
    memo.append((memo[i-1]+memo[i-2]) % C)

print(memo[N%p])