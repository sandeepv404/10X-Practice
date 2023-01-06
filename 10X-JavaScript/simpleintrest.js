let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------

let Principle = parseInt(readLine());
let Time = parseInt(readLine());
let Rateofint = parseInt(readLine());

let simpleint = (Principle * Time * Rateofint)/100;

console.log(simpleint);