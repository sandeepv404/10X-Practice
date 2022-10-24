n = input().split(" ")
sum = 0
for i in range(0, len(n)):
    a = int(n[i])
    sum = sum + a
while sum>12:
    sum = sum -12
print(sum)
