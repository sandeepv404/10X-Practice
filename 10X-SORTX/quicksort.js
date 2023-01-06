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
function quickSort(arr, start, end) {
    if (start < end) {
        let pos = part(arr, start, end)
        quickSort(arr, start, pos - 1)
        quickSort(arr, pos + 1, end)
    }
}
function part(arr, start, end) {
    let pivot = arr[end]
    let q = start - 1
    for (let i = start; i < end; i++) {
        if (arr[i] <= pivot) {
            q++
            let temp = arr[i]
            arr[i] = arr[q]
            arr[q] = temp
        }
    }
    let temp = arr[q + 1]
    arr[q + 1] = arr[end]
    arr[end] = temp
    return q + 1
}
let testCases = parseInt(readLine())
while (testCases--) {
    let size = parseInt(readLine())
    let arr = readLine().split(' ').map(Number)
    let start = 0, end = size - 1
    quickSort(arr, start, end)
    console.log(...arr)
}