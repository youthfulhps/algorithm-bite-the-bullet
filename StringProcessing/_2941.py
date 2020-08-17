# https://www.acmicpc.net/problem/2941


cro_alpha = input()
len1 = len(cro_alpha)

for i in range(len(cro_alpha)):
  if cro_alpha[i]=='l':
    if cro_alpha[i+1]=='j':
      len1-=1
  if cro_alpha[i]=='n':
    if cro_alpha[i+1]=='j':
      len1-=1
  
  if cro_alpha[i]=='-' or cro_alpha[i]=='=':
    len1-=1
  
print(len1);
