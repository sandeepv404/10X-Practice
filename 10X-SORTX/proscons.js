let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}



let testcases = parseInt(readLine())
for (k = 0; k < testcases; k++) {
    let arr1 = []
    let arr2 = []
    let sub = 0;
    let sum = 0;
    let result = 0;
    let n = parseInt(readLine())
    for (j = 0; j < n; j++) {
        let arr = readLine().trim().split(" ").map(Number)
        arr1[j] = arr[0] + arr[1]
        sub = sub + arr[1]
    }
    arr1.sort((a, b) => b - a)
    sum = arr1[0] + arr1[1]
    result = sum - sub;
    console.log(result)
}