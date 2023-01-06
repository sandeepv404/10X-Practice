array = input().split(' ')
m = int(input())
for i in range(0, len(array)):
    array[i] = int(array[i])
for k in range(0, m):
    end = array[len(array) - 1]
    for i in range(0, len(array) - 1):
        array[i] = array[i - 1]
        array[0] = end
for i in range(0, len(array)):
    print(array[i])
