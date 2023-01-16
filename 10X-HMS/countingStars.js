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

function countingStars(str, size) {
    let map = new Map;
    for (let i = 0; i < size; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1)
        }
        else {
            map.set(str[i], 0)
        }
    }
    let sum = 0
    for (let value of map.values()) {

        while (value > 0) {
            sum += value
            value--
        }
    }
    return sum
}
let testCases = parseInt(readLine())
for (let i = 0; i < testCases; i++) {
    let size = parseInt(readLine())
    let str = readLine().toLowerCase()
    console.log(countingStars(str, size))
}