let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
let n1 = 0, n2 = 1, nexterm;
console.log(n1);
console.log(n2);
nexterm = n1 + n2;
while (nexterm <= n) {
    console.log(nexterm);
    n1 = n2;
    n2 = nexterm;
    nexterm = n1 + n2;
}