// Rotate Array Clockwise
// Write a function which takes an array arr and a postive integer m and rotates arr clockwise, m times.

// Input
// First line contains a sequence of integers separated by spaces, denoting arr
// Second line contains a positive integer, denoting m
// Output
// Elements of the rotated array, one in each line

// Example
// Input:

// 2 1 3 4 5 10

// 1

// Output:

// 10
// 2
// 1
// 3
// 4
// 5

// Explanation
// Given array is [2, 1, 3, 4, 5, 10]. m is 1, which means that the array needs to be rotated clockwise 1 time. One clockwise rotation means all the elements get shifted towards right by 1 position. The last element will get shifted to the first postion. So, the rotated array will be [10, 2, 1, 3, 4, 5].

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let arr = readLine().split(' ');
let m = parseInt(readLine());
for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(arr[i]);
}
console.log(arr);
for (let k = 0; k < m; k++) {
  let end = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = end;
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}




