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

let n = parseInt(readLine());//6
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));//[16,17,4,3,5,2]   
}
let new1 = [];
let last = arr.pop();
new1.unshift(last);
while (arr.length >= 1) {
    let temp = arr.pop();
    last = Math.max(last, temp);
    new1.push(last);
}
for (let i = 0; i < new1.length; i++) {
    if (new1[i] === new1[i + 1])
        continue
    console.log(new1[i]);
}