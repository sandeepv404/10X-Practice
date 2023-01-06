let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as rightToLeftDiagonal
function matrix_diagonal(arr, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == n - j - 1) {
                console.log(arr[i][j]);
            }
        }
    }
}
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    let a = readLine().split(" ");
    arr[i] = [];
    for (let j = 0; j < n; j++) {
        arr[i][j] = parseInt(a[j]);
    }
}
matrix_diagonal(arr, n);

// Do not change anything below this line
// let m = parseInt(readLine());
// let matrix = [];
// for (let row = 0; row < m; row++) {
//     let rowElements = readLine().split(" ");
//     matrix.push(rowElements);
// }
// let result = rightToLeftDiagonal(matrix);
// for (element of result) {
//     console.log(element);
// }