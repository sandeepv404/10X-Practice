let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// 5
// 1
// 6
// 7
// 8
// 9

//[1,6,7,8,9]

let n = parseInt(readLine()); //5
let array = [];
for (let i = 0; i < n; i++) {
    array.push(parseInt(readLine()));
}
console.log(array);