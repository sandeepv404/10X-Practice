let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1];
}
//-------------------------------------

let input = readLine().split(" ")
let n = parseInt(input[0])
let q = parseInt(input[1])
let arr = readLine().split(" ")
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(arr[i])
}
let sum_array = []
let sum = arr[0]
sum_array.push(sum)
for (let i = 1; i < n; i++) {
    sum = sum + arr[i]
    sum_array.push(sum)
}
for (let i = 0; i < q; i++) {
    let queries = readLine().split(" ")
    let start = parseInt(queries[0])
    let end = parseInt(queries[1])
    if (start == 0) {
        console.log(sum_array[end])
    }
    else {
        console.log(sum_array[end] - sum_array[start - 1])
    }
}

