n = int(input())
row = []
for i in range(0, n):
    rowcol = input().split(" ")
    row.append(rowcol)
output = [[row[j][i] for j in range(len(row))] for i in range(len(row[0]))]
for i in output:
    print(" ".join(i))
