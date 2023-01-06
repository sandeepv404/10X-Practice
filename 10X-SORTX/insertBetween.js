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

let n = readLine().split(" ");
let array = readLine().split(" ");
let array1 = [];
let sortArray = [];
for (let i = 0; i < n[0]; i++) {
    array[i] = parseInt(array[i]);
    array1 = array.concat(parseInt(n[1]));
    sortArray = array1.sort((a, b) => a - b)
}

console.log(...sortArray);