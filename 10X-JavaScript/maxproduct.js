let fs = require("fs");
const { mainModule } = require("process");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// let input1 = parseInt(readLine());
// //console.log("input1: " + input1);
// let input2 = parseInt(readLine());
// //console.log("input2: " + input2);
// let input3 = readLine().split(" ").map(Number);
// //console.log("input3: " + input3);
// let input4 = readLine().split(" ").map(Number);
// //console.log("input4: " + input4);

// let max_Value = Math.max(...input3);
// //console.log("max_Value: " + max_Value);
// let min_Value = Math.min(...input4);
// //console.log("min_Value: " + min_Value);

// let max_Product = Math.abs(min_Value * max_Value);
// //console.log("max_Product: " + max_Product);
// console.log(max_Product);


// let input1 = parseInt(readLine());
// let input2 = parseInt(readLine());
// let input3 = readLine().split(" ").map(Number);
// let input4 = readLine().split(" ").map(Number);
// let array1 = [];
// let array2 = [];
// for (let i = 0; i < input1; i++) {
//     array1.push(input3[i])
// }
// //console.log('array1: ' + array1);
// let maximum = Math.max(...array1);
// //console.log('maximum: ' + maximum);

// for (let j = 0; j < input2; j++) {
//     array2.push(input4[j])
// }
// //console.log('array2: ' + array2);
// let minimum = Math.min(...array2);
// //console.log("minimum: " + minimum);
// let max_Product = maximum * minimum
// //console.log("max_Product: " + max_Product);
// let abs_max_Product = Math.abs(max_Product);
// //console.log("abs_max_Product: " + abs_max_Product);
// console.log(abs_max_Product);



let a = parseInt(readLine());
let b = parseInt(readLine());
let c = readLine().split(' ');
let d = readLine().split(' ');
for (let i = 0; i < a; i++) {
    c[i] = parseInt(c[i]);
}
for (let i = 0; i < b; i++) {
    d[i] = parseInt(d[i]);
}
let res = c[0];
for (let j = 0; j < a; j++) {
    if (c[j] < 0) {
        c[j] = Math.abs(c[j])
    }
    res = Math.max(res, c[j]);
}
let res2 = d[0];
for (let i = 0; i < b; i++) {
    if (d[i] < 0) {
        d[i] = Math.abs(d[i]);
    }
    res2 = Math.max(res2, d[i]);
}
let a1 = res;
let b1 = res2;
let ans = (a1 * b1);
console.log(Math.abs(ans));

