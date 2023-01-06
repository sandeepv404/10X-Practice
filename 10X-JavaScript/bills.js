let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------
let cost1 = parseInt(readLine());
let pur1 = parseInt(readLine());
let cost2 = parseInt(readLine());
let pur2 = parseInt(readLine());

let total = cost1 * pur1 + cost2 * pur2;
console.log(total);