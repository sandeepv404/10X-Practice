let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}


let n = readLine().split(" ");
console.log(n);
// const ans = []
// let s = 0;
// let maxSize = nums.length * 2;
// while (ans.length < maxSize) {

//     if (s === nums.length) {
//         s = 0;
//     }

//     ans.push(nums[s])
//     s++;

// }

// return ans;