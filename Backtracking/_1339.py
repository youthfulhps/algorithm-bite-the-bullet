#https://www.acmicpc.net/problem/1339


import sys

N = int(sys.stdin.readline());

num = [i for i in range(9,-1,-1)]
weight = [0]*26

for _ in range(N):
    word = sys.stdin.readline().rstrip();
    for i in range(len(word)):
        weight[ord(word[i])-65]+=10**(len(word)-i-1)

weight.sort(reverse=True)

sum1 = 0

for i in range(10):
    sum1+=num[i]*weight[i]

print(sum1)