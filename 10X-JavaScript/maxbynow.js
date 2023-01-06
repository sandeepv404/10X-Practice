let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


// Max by now
// You have been given n, denoting the number of input values. For each input, you have to print the maximum input taken so far.

// Note:
// You don't need to consider n in taking out this maximum.
// For the first input of n values, the max value will be that value itself.
// Input Format
// First line denotes the number of inputs n. The next n lines contains one integer each, denoting input values.

// Output Format
// There will be n lines in the output, containing one integer in each line, ith line denotes the maximum of the i inputs taken so far.

// Sample Input
// 5
// 3
// 2
// 5
// 10
// 8
// Sample Output
// 3
// 3
// 5
// 10
// 10
// Explanation
// The first line contains 5, denoting there will be 5 input values, in next 5 lines.
// Those inputs are 3,2,5,10,8.
// Corresponding to each of them, the maximum value received so far becomes 3,3,5,10,10.
let input = parseInt(readLine());
let max = -99999;
for(let i = 0; i < input; i ++){
    let value = parseInt(readLine());
    if( value > max)
    {
        max = value;
    } else {
        max;
    }
    console.log(max);
}