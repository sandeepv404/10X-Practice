let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------

let input = readLine().split(" ");
let input1 = parseInt(input[0]);
let input2 = parseInt(input[1]);
let count = 0;
let array = readLine().split(" ");
for (let i = 0; i < input1; i++) {
    array[i] = parseInt(array[i]);
    if ((array[i] % input2) === 0)
        count++;
}
console.log(count);