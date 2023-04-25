#https://www.acmicpc.net/problem/1065


def num(n):
    if n<1000 and n>100:
        n=str(n)
        if (int(n[1])-int(n[0]))==(int(n[2])-int(n[1])):
            return 1
        elif n==1000:
            return 0
        else:
            return 0
    
x = int(input())
if x<100:
    print(x)
else:
    cnt=99
    for i in range(x-99):
        if num(i+100):
            cnt+=1
    print(cnt)