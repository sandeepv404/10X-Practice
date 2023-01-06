let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------
//apply for loop and initiate from 1 and find the input value occurs in the loop and count the input how many times it occurs
let ep = parseInt(readLine()); // -3
let n = parseInt(readLine()); // 5
let count = 0;
for (let i = 1; i <= n; i++){
    let num = parseInt(readLine());
    if(num == ep){    
        count++;
       
    }
}  
console.log(count);

// ["abc", "123"]



