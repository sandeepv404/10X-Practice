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
// function factorial(number) {
//     // write your code here
//     if (number == 0 || number == 1) { return 1; }
//     else if (number < 0) { return undefined; }
//     else { return number * factorial(number - 1); }

// }

// let number = parseInt(readLine());

// console.log(factorial(number));

function factorial(number) {
    let ans = 1;
    // write your code here
    if (number == 0 || number == 1) { return ans; }
    else if (number < 0) { return undefined; }
    else {
        for (let i = number; i >= 1; i--) {
            ans = ans * i;
        }
        return ans;
    }
}

let number = parseInt(readLine());

console.log(factorial(number));