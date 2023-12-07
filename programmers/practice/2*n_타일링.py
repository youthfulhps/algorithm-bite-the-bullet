def solution(n):
    memo = [ 0 for i in range(n + 2) ]
    memo[1] = 1
    memo[2] = 1
    memo[3] = 2

    for i in range(4, n + 2):
        memo[i] = (memo[i - 2] + memo[i - 1]) % 1000000007

    return memo[n + 1]
