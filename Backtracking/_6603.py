#https://www.acmicpc.net/problem/6603


import sys
sys.setrecursionlimit(10000)

def backtracking(li, idx):
    if idx==6:
        print(' '.join(map(str, li)))
    else:
        for i in range(len(numbers)):
            if not li:
                backtracking(li+[numbers[i]], idx+1)
            else:
                if numbers[i]>li[-1]:
                    backtracking(li+[numbers[i]], idx+1)



while True:
    numbers = list(map(int, sys.stdin.readline().split()))
    N = numbers.pop(0)
    if N==0:
        break
    numbers.sort()

    backtracking([],0)
    print()