let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------
let a = parseInt(readLine());
let b = parseInt(readLine());

let sum = a + b; //5
let diff = a - b; //1
let product = a * b; //6
console.log(sum);
console.log(diff);
console.log(product);