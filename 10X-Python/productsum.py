product = 1
sum = 0
list = [int(i) for i in str(input())]
# print(list)
for i in range(0, len(list)):
    product *= int(list[i])
    sum += int(list[i])
print(int(product - sum))
