first_term = int(input())
second_term = int(input())
third_term = int(input())
nth_term = len([first_term, second_term, third_term])

commonratio = second_term / first_term

#
# a = first term in the array
# r = commonratio, division between any terms in the array
# n = total number of terms
# nth_term + 1 = 4th term
# ar^n-1 = ar^nth_term  next trem in the array = a =2, r = 2, n = 4
#
next_term = first_term * commonratio ** (nth_term)
print(int(next_term))
