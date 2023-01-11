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

let getColumnDescription = (num) => {
    let title = '';
    const alist = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
    while (num) {
        let mod = (num - 1) % 26;
        num = Math.floor((num - mod) / 26);
        title += alist[mod];
    }
    return title.split('').reverse().join('');
}

let n = parseInt(readLine())
for (let j = 0; j < n; j++) {
    let i = parseInt(readLine())
    console.log(getColumnDescription(i))
}