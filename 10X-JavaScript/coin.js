let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
//sum of given input
//7+8+9+4+5+6+1+2+3 = 45

let input = readLine();
function coinvalue(input, inital) {
    if (inital == input.length - 1) {
        return input[inital];
    }

    return parseInt(input[inital]) + parseInt(coinvalue(input, inital + 1));
}

console.log(coinvalue(input, 0));