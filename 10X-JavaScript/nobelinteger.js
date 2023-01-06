const { count } = require("console");
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
let exist = 0;
for (let i = 0; i < n; i++) {
    array[i] = parseInt(readLine());
    if (array[i] >= 2) {
        exist = 1;
    } else if (array[i] < 2) {
        exist = -1;
    }
}
console.log(exist)


