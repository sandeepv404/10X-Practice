let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// Given two force vectors, find out whether they are parallel, perpendicular or neither. Let the first vector be A = a1 i +a2 j + a3 k and the second vector be B = b1 i + b2 j + b3 k.

// A.B = a1 x b1 + a2 x b2 + a3 x b3

// A x B = (a2 x b3 - a3 x b2) i - (a1 x b3 - b1 x a3) j + (a1 x b2 - a2 x b1) k

// |A|2 = a12 + a22 + a32

// If A.B = 0, then A and B are perpendicular.

// If |A X B| = 0, then A and B are parallel.

let v1 = readLine().split(" ");
let v2 = readLine().split(" ");
let perpendicular = (v1[0] * v2[0]) + (v1[1] * v2[1]) + (v1[2] * v2[2])
// console.log(perpendicular);
let parallel = (v1[1] * v2[2] - v1[2] * v2[1]) - (v1[0] * v2[2] - v2[0] * v1[2]) - (v1[0] * v2[1] - v1[1] * v2[0])
// console.log(parallel);
if (perpendicular == 0) {
    console.log(2);
} else if (parallel == 0) {
    console.log(1);
} else {
    console.log(0);
}

