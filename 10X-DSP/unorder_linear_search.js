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

let k = parseInt(readLine())
let n = parseInt(readLine())
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()))
}
console.log(search(k, arr))
function search(k, arr) {
    let flag = -1
    for (let i = 0; i < n; i++) {
        if (arr[i] === k) {
            flag = i
            break
        }
    } return flag
}