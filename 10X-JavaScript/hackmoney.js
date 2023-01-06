let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function hackMoney(r, n) {
    if (n == r)
        return true;
    if (r > n)
        return false;
    return hackMoney(r * 10, n) || hackMoney(r * 20, n);
}

let t = parseInt(readLine());
for (let i = 1; i <= t; i++) {
    let r = 1;
    let n = parseInt(readLine());
    if (hackMoney(r, n))
        console.log("Yes");
    else
        console.log("No");
}