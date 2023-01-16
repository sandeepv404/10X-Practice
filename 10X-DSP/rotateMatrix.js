let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// --------Do NOT edit anything above this line----------
//     Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());
let matrix = [];
for (let i = 0; i < n; i++) {
    let row = readLine().split(" ");
    matrix[i] = [];
    for (let j = 0; j < row.length; j++) {
        matrix[i][j] = parseInt(row[j])
    }
}
// console.log(matrix);
let result = [];
let m = matrix[0].length;
console.log(m);
for (let i = 0; i < m; i++) {
    result[i] = [];
    for (let j = 0; j < matrix.length; j++) {
        //result[i][j] = matrix[2 - j][i];
        result[i][j] = matrix[n - j - 1][i];
    }

    console.log(result[i].join(" "));
}