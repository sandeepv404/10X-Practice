def findLuckyNumber(nums):
    count = 0
    for j in range(0, len(nums)):
        for k in range(0, len(nums)):
            if nums[j] == nums[k]:
                count = count + 1
            if count == nums[j]:
                return nums[j]

if __name__ == "__main__":
    num_elems = int(input())
    input_arr = []
    for index in range(num_elems):
        input_arr.append(int(input()))
    
    print(findLuckyNumber(input_arr))  
