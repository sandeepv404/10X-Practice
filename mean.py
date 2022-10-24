import math
n = int(input())
array = input().split(' ')
sum = 0
for i in range(0, n):
    sum += int(array[i])
print(math.floor(sum / n))
