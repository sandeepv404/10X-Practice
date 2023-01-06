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
let arr = readLine().split(" ").map(Number)
let res = 0
let arr1 = []
let arr2 = []
for (let i = 0; i < n; i++) {
    res = res + Math.abs(arr[i] - i - 1)
    arr[i] = arr[i] - (i + 1)
    if (arr[i] == 0) {
        arr1.push(i + 1)
        arr2.push(i + 1)
    }
    else if (arr[i] < 0) {
        arr1.push(i + 1)
        arr2.push(i + arr[i] + 1)
    }
    else {
        arr1.push(i + arr[i] + 1)
        arr2.push(i + 1)
    }
}
for (let i = 1; i < n; i++) {
    if (arr1[i] > arr1[i - 1]) {
        arr1[i] = arr1[i - 1]
    }
}
for (let i = n - 2; i >= n; i--) {
    if (arr2[i] < arr2[i + 1]) {
        arr2[i] = arr2[i + 1]
    }
}
let mx = 0
for (let i = 0; i < n; i++) {
    mx = Math.max(mx, (arr2[i] - arr1[i]) * 2)
}
console.log(res + mx)