let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine());
// console.log("n: " + n);
let array = [];
let sum = 0;
for (let i = 0; i < n; i++) {
    array[i] = readLine().split(" ")
    // console.log("array[i]: " + array[i])
    for (let j = 0; j < n; j++) {
        // console.log("j: " + j);
        array[i][j] = parseInt(array[i][j])
        // console.log("array[i][j]: " + array[i][j])
        //3x3
        if (i === j) {
            sum = sum + array[i][j];
        }
        if (i + j === n - 1) {
            sum = sum + array[i][j];
        }

    }
}
// console.log("sum: " + sum)
console.log(sum);