oddsum = 0
m = input().split(" ")
Rows = int(m[0])
Columns = int(m[1])
example_matrix = []
for i in range(Rows):
    single_row = list(map(int, input().split()))
    example_matrix.append(single_row)
matrix1 = sum(example_matrix, [])
for k in range(0, len(matrix1)):
    if (matrix1[k] % 2 != 0):
        oddsum += matrix1[k]
print(oddsum)
