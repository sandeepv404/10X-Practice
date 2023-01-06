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

let array = readLine().split('');
length = parseInt(array.length / 2);
for (let i = length + 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= length && key < array[j]) {
        array[j + 1] = array[j];
        j--;
    }
    array[j + 1] = key;
}
console.log(array.join(''));