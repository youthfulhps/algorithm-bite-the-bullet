#https://www.acmicpc.net/problem/1260


node_num, line_num, start_node = map(int, input().split(" "))

matrix = [[0]*(node_num+1) for _ in range(node_num+1)]


for _ in range(line_num):
    tmp = list(map(int, input().split(" ")))
    matrix[tmp[0]][tmp[1]]=1
    matrix[tmp[1]][tmp[0]]=1
    
def dfs(matrix, start):
    visit = []
    stack = [start]
    
    while stack:
        node = stack.pop()
        if node not in visit:
            visit.append(node)
            tmp=[]
            for i in range(len(matrix)):
                if matrix[node][i]==1:
                    tmp.append(i)
            stack.extend(sorted(tmp, reverse=True))
            
    return visit
    
    
def bfs(matrix, start):
    visit = []
    queue = [start]
    
    while queue:
        node = queue.pop(0)
        if node not in visit:
            visit.append(node)
            tmp=[]
            for i in range(len(matrix)):
                if matrix[node][i]==1:
                    tmp.append(i)
            queue.extend(sorted(tmp))
    return visit
                

print(' '.join(map(str, dfs(matrix,start_node))))
print(' '.join(map(str, bfs(matrix,start_node))))