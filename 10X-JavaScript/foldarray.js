let fs = require("fs");
const { parse } = require("path/posix");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let input = parseInt(readLine());
console.log("input: " + input)
let array = [];
for (let i = 0; i < input; i++) {
    array[i] = parseInt(readLine());
}
console.log("array: " + array);
let fold = parseInt(readLine());
console.log("fold: " + fold);
let j = input - 1;
console.log("j1: " + j)
for (let k = 0; k < fold; k++) {
    for (let i = 0; i < j; i++, j--) {
        array[i] = array[i] + array[j];
    }
}
console.log("j2: " + j)
console.log("j3: " + (j + 1));
for (let i = 0; i <= j; i++)
    console.log("array[i]: " + array[i]);
console.log(array);    