n = int(input())
arr = []
for i in range(0,n):
  arr.append(int(input()))

min = arr[0];
for i in range(1, len(arr)):
    if arr[i] < min: 
        min = arr[i]
sum = 0;
while min != 0: 
    rem = min % 10
    sum = sum + rem;
    min = int(min / 10)

if sum % 2 == 0: 
    print(1)
else:
    print(0)
