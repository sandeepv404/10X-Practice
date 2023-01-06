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

let M = parseInt(readLine()); //3
let N = parseInt(readLine()); //4
let arr = [];
let arr2 = [];
for (let i = 0; i < M; i++) {
    arr.push(readLine().split(' ').map(Number));

}
for (let i = 0; i < arr.length; i++) {
    arr2.push(...arr[i]);
}
//console.log(arr)
arr2.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log(...arr2)
//console.log(...arr2.sort((a, b) => a - b))


