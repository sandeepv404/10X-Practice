n = int(input())
array = []
for i in range(0, n):
    array.append(int(input()))

fold = int(input())
j = n-1
for k in range(0, fold):
    for i in range(0, j-2):
        array[i] += array[j]
        j = j-1
       
print(j+1)
for i in range(0, j+1):
    print(array[i])
