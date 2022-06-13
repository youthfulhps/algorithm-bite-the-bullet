#https://www.acmicpc.net/problem/1463


D = [0,0,1,1]
N = int(input())

if N<4:
    print(D[N])
else:
    for i in range(4,N+1):
        answer = D[i-1]+1
        if i%3==0:
            if answer>D[i//3]+1:
                answer = D[i//3]+1
        if i%2==0:
            if answer>D[i//2]+1:
                answer = D[i//2]+1
        D.append(answer)
    print(D[N])