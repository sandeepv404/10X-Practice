// <!-- Extreme Product
// You have been given n integer values. You have to find their extreme product.

// Extreme product is defined as the product of the two extreme values in the given input, that is maximum and minimum.

// Input Format:
// First line denotes n, the number of inputs. The next n lines contains one integer in each line.

// Output Format:
// One integer denoting the extreme product of the given n values.

// Example:
// Input:

// 5
// 10
// 20
// 30
// 40
// 50
// Output:

// 500
// Explanation:

// From the given 5 integers, the maximum is 50, and the minimum is 10. So the extreme product is 10x50 = 500. -->

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
let array = [];

for(let i = 0; i < n; i++){
    array[i] = parseInt(readLine());
}

//console.log(array);

//maximum and minimum

let mincheck = array[0];
for(let i = 1; i < n; i++){
    mincheck = Math.min(mincheck, array[i])
}
//console.log(mincheck);

let maxcheck = array[0];
for(let i = 1; i < n; i++){
    maxcheck = Math.max(maxcheck, array[i])
}
//console.log(maxcheck);

let output = mincheck * maxcheck ;
console.log(output);