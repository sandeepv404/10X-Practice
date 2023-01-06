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

let n = parseInt(readLine())
let array = []
for (let i = 0; i < n; i++) {
    array.push(parseInt(readLine()));
    let array1 = readLine().split(" ");
    for (let j = 0; j < array[i]; j++) {
        array1[j] = parseInt(array1[j])
    }
    console.log(array1.sort((a, b) => a - b))
}