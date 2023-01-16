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



class InputReader {
    constructor() {
    }
    readStrings(n) {
        for (let i = 0; i < n; i++) {
            let value = readLine()
            console.log(i, value)
        }
    }
    readIntegers(n) {
        for (let i = 0; i < n; i++) {
            let value = parseInt(readLine())
            console.log(i, value)
        }
    }
    readFloats(n) {
        for (let i = 0; i < n; i++) {
            let value = parseFloat(readLine())
            value = value.toFixed(2)
            console.log(i, value)
        }
    }
}
let n = parseInt(readLine())
let type = readLine()
let reader = new InputReader()
{
    if (type == 'string') {
        reader.readStrings(n)
    }
    else if (type == 'integer') {
        reader.readIntegers(n)
    }
    else if (type == 'float') {
        reader.readFloats(n)
    }
}