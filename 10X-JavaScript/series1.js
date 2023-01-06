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

//1, 3, 6, 10, 15, 21...
// 0 + 1 = 1
//1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// 15 + 6 = 21
// 21 + 7 = 28
let n = parseInt(readLine());
let array = []
let sum = 0;

for (let i = 0; i < n; i++) {
    // console.log(i)
    sum = i + (i + 1)
    console.log(sum)

}
// console.log(sum)
// for (let j = 0; j < array.length; j++) {
//     console.log(j)
//     console.log(array[j])
//   sum++
// }


