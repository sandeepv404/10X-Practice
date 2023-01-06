let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// 3
// 1
// 2
// 5
// f(1) = 1
// f(2) = 1 + (2x3) = 1 + 6 = 7
// f(5) = 1+(2x3)+(4x5x6)+(7x8x9x10)+(11x12x13x14x15) = 365527

function sequence(s) {
    //initial
    if (s == 1) {
        return 1;
    }
    let output = 1;
    let a = ((s * (s - 1)) / 2) + 1;
    let b = (s * (s + 1) / 2);
    while (a <= b) {
        output *= a;
        a++;
    }
    return output += sequence(s - 1);

}

let input = parseInt(readLine());
for (let i = 0; i < input; i++) {
    let s = parseInt(readLine());
    console.log(sequence(s));
}