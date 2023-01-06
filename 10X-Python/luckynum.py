def findLuckyNumber(nums):


n = int(input())
array = []
for i in range(0, n):
    list = array.append(int(input()))
for j in range(0, len(array)):
    count = 0
    for k in range(0, len(array)):
        if array[j] == list[i]:
            count = count + 1
    if count == array[j]:
        print(array[j])

    # DO NOT change anything below this line
if __name__ == "__main__":
    num_elems = int(input())
    input_arr = []
    for index in range(num_elems):
        input_arr.append(int(input()))

    print(findLuckyNumber(input_arr))
