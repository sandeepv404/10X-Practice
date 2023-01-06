let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// ---------------------------------------

let first_term = parseInt(readLine());
let second_term = parseInt(readLine());
let third_term = parseInt(readLine());
let nth_term = [first_term, second_term, third_term].length;

//console.log(nth_term.length); ====== 3
let commonratio = second_term / first_term;

/*
a = first term in the array
r = commonratio, division between any terms in the array
n = total number of terms
nth_term + 1 = 4th term 
ar^n-1 = ar^nth_term  next trem in the array = a =2, r = 2, n = 4
*/
let next_term = first_term * commonratio ** (nth_term);
console.log(parseInt(next_term));
