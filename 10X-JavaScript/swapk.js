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
let n = readLine().split(" ");
//console.log("n: " + n);
let a1 = parseInt(n[0]);
let a2 = parseInt(n[1]);
//console.log("a1: " + a1);
//console.log("a2: " + a2);

let a3 = readLine().split(" ");
//console.log("a3: " + a3)
let num = a3.map(Number);
//console.log("num: " + num)

let temp = num[a2 - 1];
//console.log("temp: " + temp);
num[a2 - 1] = num[num.length - a2]
num[num.length - a2] = temp;

for (let i = 0; i < num.length; i++) {
    //console.log("num[i]: " + num[i])
    console.log(num[i])
}