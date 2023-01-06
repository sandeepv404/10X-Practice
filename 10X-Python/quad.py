n = int(input())
array = []
for i in range(0, n):
    point = input().split(" ")
    array.append(point)
# print(array)
for j in range(0, len(array)):
    if int(array[j][0]) > 0 and int(array[j][1]) > 0:
        print("Q1")
    elif int(array[j][0]) < 0 and int(array[j][1]) > 0:
        print("Q2")
    elif int(array[j][0]) < 0 and int(array[j][1]) < 0:
        print("Q3")
    elif int(array[j][0]) > 0 and int(array[j][1]) < 0:
        print("Q4")
