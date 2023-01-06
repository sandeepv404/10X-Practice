list1 = input().split(" ")
list2 = input().split(" ")
occurence = 0
for i in range(0, int(list1[0])):
    value = int(list2[i])
    if value == int(list1[1]):
        occurence = occurence + 1

print(occurence)
