n = int(input())
reverse = 0
while(n != 0):

    digitValue = n%10
    reverse = reverse*10 + digitValue
    n= int(n/10)
print(reverse)
