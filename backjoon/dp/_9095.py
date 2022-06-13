#https://www.acmicpc.net/problem/9095


test = int(input())
input1 = []
for i in range(test):
    input1.append(int(input()))

li=[1,2,4]
for i in range(4,11):
    li.append(sum(li[-3:]))
    
for i in range(test):
    print(li[input1[i]-1])