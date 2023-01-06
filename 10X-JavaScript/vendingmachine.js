let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------
let myCustomer = readLine();
let myOrder = readLine();
console.log("Hello " + myCustomer +" !!!");
console.log("You ordered " + myOrder+ ".");
