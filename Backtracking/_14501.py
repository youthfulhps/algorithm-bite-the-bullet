#https://www.acmicpc.net/problem/14501


N = int(input())
days =[1]
pays = [0]
for _ in range(N):
    day, pay = map(int, input().split(" "))
    days.append(day)
    pays.append(pay)

max_pay = 0

def back(cost, idx):
    global max_pay
    if idx+days[idx]==N+1:
        tmp = cost+pays[idx]
        max_pay = max(tmp, max_pay)
    
    elif idx+days[idx]>N+1:
        tmp = cost
        max_pay = max(tmp, max_pay)

    else:
        for i in range(idx+days[idx], N+1):
            back(cost+pays[idx], i)

back(0, 0)

print(max_pay)