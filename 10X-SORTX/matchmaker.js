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

function matchMake(g, b) {
    let c = 0;
    for (let i = 0; i < g.length; i++) {
        if (g[i] % b[i] === 0 || b[i] % g[i] === 0) {
            c++;
        }
    }
    return c;
}
let testCase = parseInt(readLine());
while (testCase--) {
    let n = parseInt(readLine());
    let asc_girls = readLine().split(" ").map(Number).sort((a, b) => a - b);
    let dec_boys = readLine().split(" ").map(Number).sort((a, b) => b - a);
    console.log(matchMake(asc_girls, dec_boys));
}