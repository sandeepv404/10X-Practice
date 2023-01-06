// Frequency 101
// You have been given an array of size N, and a target integer k. You need to find the frequency (number of occurences) of the target k in the given array.

// Input
// First line contains two space seperated integers, denoting N and k respectively. The next line contains N space seperated integers, denoting the elements of the given array.

// Output
// One Integer, denoting the required frequency.

// Example
// Input1:

// 7 0
// 1 0 6 8 9 0 -34
// Output1:

// 2
// Explanation:

// 0 is occuring two times in the given array.

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let narray = [];
narray = readLine().split(" ");
let array = [];
array = readLine().split(" ");
let occurence = 0;
for (i = 0; i < parseInt(narray[0]); i++) {
  let value = parseInt(array[i]);
  if (value === parseInt(narray[1])) {
    occurence++;
  }
}

console.log(occurence);