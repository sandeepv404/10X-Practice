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
let s = readLine().split(' ')
let count = 0;
let longest_word;
for (let i = 0; i < s.length; i++) {
    if (s[i].length > count) {
        count = s[i].length;
        longest_word = s[i].length;
    }
}
console.log(longest_word);