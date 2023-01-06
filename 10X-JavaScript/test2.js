let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
let ans = 0;
while (n > 0) { //123 > 0
    let rem = n % 10; //123%10 , 3
    ans = ans * 10 + rem; // 
    n = parseInt(n / 10); //12
}
console.log(ans);