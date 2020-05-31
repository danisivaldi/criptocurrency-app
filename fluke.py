import numpy as np

arr = [int(i) for i in input().split()] # input array
n = len(arr)
arr_count = np.zeros(100, dtype=int) # counter of occurences of each number in array. starts with zero for every number.

for i in range(n):
	arr_count[arr[i]] += 1 # number arr[i] appeard in array

for i in range(100):
	if arr_count[i] == 1: # the only number that appeard one time only
		print(i)
		break