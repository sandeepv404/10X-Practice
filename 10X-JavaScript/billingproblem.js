const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------

let Unitprice = parseInt(readLine());
//let Gstprice = parseInt(readLine());
let Gstprice = parseFloat(readLine());

let finalPrice = Unitprice + (Unitprice * Gstprice/100);
console.log(finalPrice);