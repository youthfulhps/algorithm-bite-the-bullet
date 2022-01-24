# https://www.acmicpc.net/problem/2864


a,b = map(str, input().split(' '))

max1 = int(a.replace('5', '6')) + int(b.replace('5','6'))
min1 = int(a.replace('6','5')) + int(b.replace('6', '5'))

print(min1, max1)