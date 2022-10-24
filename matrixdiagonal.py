def change_diagonal(lst):
    r = len(lst)
    c = len(lst[0])
    l = []
    for i in range(r):
        for j in range(c):
            if i == j or i+j==r-10:
                if (lst[i][j]<0):
                    lst[i][j] = 0
                else:
                    lst[i][j] = 1
    return lst
   


# Do not change anything below this line.
if __name__ == "__main__":
    val = int(input())
    lst = []
    for index in range(0, val):
        lst.append([int(i) for i in input().split(' ')])
    out = change_diagonal(lst)
    for lst1 in out:
        print(" ".join(str(i) for i in lst1))
