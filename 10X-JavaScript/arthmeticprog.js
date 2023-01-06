const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------

let first_term = parseInt(readLine());
let second_term = parseInt(readLine());
let third_term = parseInt(readLine());
let nth_term = [first_term, second_term, third_term].length;

//console.log(nth_term.length);

let difference = second_term - first_term;

/* 
a+(n-1)d = a+(n*d) will give the next number
a || first_term = 2
n -1 || nth_term - 1 = 3 (the last term number count)
d || difference = 3
*/


let next_term = first_term + (nth_term * difference);
console.log(next_term);

