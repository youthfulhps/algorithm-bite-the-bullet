#https://www.acmicpc.net/problem/1759


len_p, num_ap = map(int, input().split())
avail = list(map(str, input().split(" ")))
avail.sort()
mo = ["a","e","i","o","u"]


def backtracking(li, idx, num_m, num_j):
    if idx==len_p and num_m>0 and num_j>1:
        print(''.join(li))
    else:
        if not li:
            for i in range(num_ap):
                if avail[i] in mo:
                    backtracking(li+[avail[i]], idx+1, num_m+1, num_j)
                else:
                    backtracking(li+[avail[i]], idx+1, num_m, num_j+1)        
        else:
            for i in range(num_ap):
                if avail[i]>li[-1]:
                    if avail[i] in mo:
                        backtracking(li+[avail[i]], idx+1, num_m+1, num_j)
                    else:
                        backtracking(li+[avail[i]], idx+1, num_m, num_j+1)

backtracking([],0,0,0)
