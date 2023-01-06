// Matrix 101
// You have been given a matrix (2D array) of size n x m (n rows and m columns).

// You need to find the sum of all odd numbers in the given matrix.

// Input
// The first line contains two integers denoting n and m respectively. The next line n lines contains m space seperated integers each, denoting the elements of the given matrix.

// Output
// One Integer, denoting the required sum.

// Example
// Input1:

// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 0 5 3
// Output1:

// 33
// Explanation:

// matrix =   [[1, 2, 3, 4],
//             [5, 6, 7, 8],
//             [9, 0, 5, 3]]

// Sum of all odd elements = 1 + 3 + 5 + 7 + 9 + 5 + 3 = 33

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}


// let narray = readLine().split(" ");
// console.log(parseInt(narray[0]))
// let array = [];
// let oddsum = 0;
// for (let i = 0; i < parseInt(narray[0]); i++) {
//   array[i] = readLine().split(" ");
//   for (let j = 0; j < parseInt(array[1]); j++) {
//     array[i][j] = parseInt(array[i][j]);
//     oddsum = array[i][j];

//   }
// }
// console.log(oddsum)
// console.log(array)
// console.log(oddsum)

let m = parseInt(readLine());
//console.log(m)
let matrix = [];
let oddsum = 0;
for (let i = 0; i < m; i++) {
  let values = readLine().split(' ');
  //console.log(values);
  matrix[i] = [];
  for (let j = 0; j < values.length; j++) {
    matrix[i][j] = parseInt(values[j]);
  }
}
//console.log(matrix)
let matrix1 = [].concat(...matrix);
//console.log(matrix1.length);
for (k = 0; k < matrix1.length; k++) {
  if (matrix1[k] % 2 != 0) {
    oddsum += matrix1[k]
  }
}

console.log(oddsum);

