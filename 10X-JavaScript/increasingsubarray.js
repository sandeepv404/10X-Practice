let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


let n = parseInt(readLine())
let arr = readLine().split(" ")
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(arr[i])
}

let num = arr[0];
let count = 1;
let maxLen = 1;
let len = 0;
for (let i = 1; i < n; i++) {
    if (arr[i] > num) {
        count++;
        num = arr[i];
        if (count > maxLen) {
            maxLen = count;
            len = i;
        }
    }
    else {
        count = 1;
        num = arr[i];
    }
}
console.log(maxLen, (len - maxLen) + 1, len);

