#https://www.acmicpc.net/problem/2231


N = int(input())
answer = 1000001

def gene(n):
    for i in str(n):
        n+=int(i)

    if n==N:
        return True
    return False


for i in range(N,-1,-1): 
    if gene(i):
        answer = min(answer, i)

if answer==1000001:
    print(0)
else:
    print(answer)