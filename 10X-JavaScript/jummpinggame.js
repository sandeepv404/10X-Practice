let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function jump(arr, n, idx) {
    if (idx >= n)
        return 0;

    return Math.min(jump(arr, n, idx + 1), jump(arr, n, idx + arr[idx])) + 1
}

function ConvertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
}

let n = parseInt(readLine());
let arr = readLine().split(" ");
ConvertToNumber(arr);
console.log(jump(arr, n, 0));